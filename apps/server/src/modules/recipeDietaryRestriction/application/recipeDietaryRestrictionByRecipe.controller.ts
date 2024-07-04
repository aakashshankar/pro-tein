import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { RecipeDietaryRestrictionDomainFacade } from '@server/modules/recipeDietaryRestriction/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RecipeDietaryRestrictionApplicationEvent } from './recipeDietaryRestriction.application.event'
import { RecipeDietaryRestrictionCreateDto } from './recipeDietaryRestriction.dto'

import { RecipeDomainFacade } from '../../recipe/domain'

@Controller('/v1/recipes')
export class RecipeDietaryRestrictionByRecipeController {
  constructor(
    private recipeDomainFacade: RecipeDomainFacade,

    private recipeDietaryRestrictionDomainFacade: RecipeDietaryRestrictionDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/recipe/:recipeId/recipeDietaryRestrictions')
  async findManyRecipeId(
    @Param('recipeId') recipeId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.recipeDomainFacade.findOneByIdOrFail(recipeId)

    const items =
      await this.recipeDietaryRestrictionDomainFacade.findManyByRecipe(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/recipe/:recipeId/recipeDietaryRestrictions')
  async createByRecipeId(
    @Param('recipeId') recipeId: string,
    @Body() body: RecipeDietaryRestrictionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, recipeId }

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
