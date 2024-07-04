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
  DietaryRestriction,
  DietaryRestrictionDomainFacade,
} from '@server/modules/dietaryRestriction/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { DietaryRestrictionApplicationEvent } from './dietaryRestriction.application.event'
import {
  DietaryRestrictionCreateDto,
  DietaryRestrictionUpdateDto,
} from './dietaryRestriction.dto'

@Controller('/v1/dietaryRestrictions')
export class DietaryRestrictionController {
  constructor(
    private eventService: EventService,
    private dietaryRestrictionDomainFacade: DietaryRestrictionDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items =
      await this.dietaryRestrictionDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: DietaryRestrictionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.dietaryRestrictionDomainFacade.create(body)

    await this.eventService.emit<DietaryRestrictionApplicationEvent.DietaryRestrictionCreated.Payload>(
      DietaryRestrictionApplicationEvent.DietaryRestrictionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:dietaryRestrictionId')
  async findOne(
    @Param('dietaryRestrictionId') dietaryRestrictionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.dietaryRestrictionDomainFacade.findOneByIdOrFail(
      dietaryRestrictionId,
      queryOptions,
    )

    return item
  }

  @Patch('/:dietaryRestrictionId')
  async update(
    @Param('dietaryRestrictionId') dietaryRestrictionId: string,
    @Body() body: DietaryRestrictionUpdateDto,
  ) {
    const item =
      await this.dietaryRestrictionDomainFacade.findOneByIdOrFail(
        dietaryRestrictionId,
      )

    const itemUpdated = await this.dietaryRestrictionDomainFacade.update(
      item,
      body as Partial<DietaryRestriction>,
    )
    return itemUpdated
  }

  @Delete('/:dietaryRestrictionId')
  async delete(@Param('dietaryRestrictionId') dietaryRestrictionId: string) {
    const item =
      await this.dietaryRestrictionDomainFacade.findOneByIdOrFail(
        dietaryRestrictionId,
      )

    await this.dietaryRestrictionDomainFacade.delete(item)

    return item
  }
}
