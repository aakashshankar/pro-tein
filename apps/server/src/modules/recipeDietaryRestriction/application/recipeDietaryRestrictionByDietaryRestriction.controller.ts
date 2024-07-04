import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { RecipeDietaryRestrictionDomainFacade } from '@server/modules/recipeDietaryRestriction/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RecipeDietaryRestrictionApplicationEvent } from './recipeDietaryRestriction.application.event'
import { RecipeDietaryRestrictionCreateDto } from './recipeDietaryRestriction.dto'

import { DietaryRestrictionDomainFacade } from '../../dietaryRestriction/domain'

@Controller('/v1/dietaryRestrictions')
export class RecipeDietaryRestrictionByDietaryRestrictionController {
  constructor(
    private dietaryRestrictionDomainFacade: DietaryRestrictionDomainFacade,

    private recipeDietaryRestrictionDomainFacade: RecipeDietaryRestrictionDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/dietaryRestriction/:dietaryRestrictionId/recipeDietaryRestrictions')
  async findManyDietaryRestrictionId(
    @Param('dietaryRestrictionId') dietaryRestrictionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.dietaryRestrictionDomainFacade.findOneByIdOrFail(
        dietaryRestrictionId,
      )

    const items =
      await this.recipeDietaryRestrictionDomainFacade.findManyByDietaryRestriction(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/dietaryRestriction/:dietaryRestrictionId/recipeDietaryRestrictions')
  async createByDietaryRestrictionId(
    @Param('dietaryRestrictionId') dietaryRestrictionId: string,
    @Body() body: RecipeDietaryRestrictionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, dietaryRestrictionId }

    const item =
      await this.recipeDietaryRestrictionDomainFacade.create(valuesUpdated)

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
}
