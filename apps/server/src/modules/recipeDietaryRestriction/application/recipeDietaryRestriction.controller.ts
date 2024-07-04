import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  RecipeDietaryRestriction,
  RecipeDietaryRestrictionDomainFacade,
} from '@server/modules/recipeDietaryRestriction/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { RecipeDietaryRestrictionApplicationEvent } from './recipeDietaryRestriction.application.event'
import {
  RecipeDietaryRestrictionCreateDto,
  RecipeDietaryRestrictionUpdateDto,
} from './recipeDietaryRestriction.dto'

@Controller('/v1/recipeDietaryRestrictions')
export class RecipeDietaryRestrictionController {
  constructor(
    private eventService: EventService,
    private recipeDietaryRestrictionDomainFacade: RecipeDietaryRestrictionDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items =
      await this.recipeDietaryRestrictionDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: RecipeDietaryRestrictionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.recipeDietaryRestrictionDomainFacade.create(body)

    await this.eventService.emit<RecipeDietaryRestrictionApplicationEvent.RecipeDietaryRestrictionCreated.Payload>(
      RecipeDietaryRestrictionApplicationEvent.RecipeDietaryRestrictionCreated
        .key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:recipeDietaryRestrictionId')
  async findOne(
    @Param('recipeDietaryRestrictionId') recipeDietaryRestrictionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.recipeDietaryRestrictionDomainFacade.findOneByIdOrFail(
        recipeDietaryRestrictionId,
        queryOptions,
      )

    return item
  }

  @Patch('/:recipeDietaryRestrictionId')
  async update(
    @Param('recipeDietaryRestrictionId') recipeDietaryRestrictionId: string,
    @Body() body: RecipeDietaryRestrictionUpdateDto,
  ) {
    const item =
      await this.recipeDietaryRestrictionDomainFacade.findOneByIdOrFail(
        recipeDietaryRestrictionId,
      )

    const itemUpdated = await this.recipeDietaryRestrictionDomainFacade.update(
      item,
      body as Partial<RecipeDietaryRestriction>,
    )
    return itemUpdated
  }

  @Delete('/:recipeDietaryRestrictionId')
  async delete(
    @Param('recipeDietaryRestrictionId') recipeDietaryRestrictionId: string,
  ) {
    const item =
      await this.recipeDietaryRestrictionDomainFacade.findOneByIdOrFail(
        recipeDietaryRestrictionId,
      )

    await this.recipeDietaryRestrictionDomainFacade.delete(item)

    return item
  }
}
