import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { RecipeIngredientDomainFacade } from '@server/modules/recipeIngredient/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RecipeIngredientApplicationEvent } from './recipeIngredient.application.event'
import { RecipeIngredientCreateDto } from './recipeIngredient.dto'

import { IngredientDomainFacade } from '../../ingredient/domain'

@Controller('/v1/ingredients')
export class RecipeIngredientByIngredientController {
  constructor(
    private ingredientDomainFacade: IngredientDomainFacade,

    private recipeIngredientDomainFacade: RecipeIngredientDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/ingredient/:ingredientId/recipeIngredients')
  async findManyIngredientId(
    @Param('ingredientId') ingredientId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.ingredientDomainFacade.findOneByIdOrFail(ingredientId)

    const items = await this.recipeIngredientDomainFacade.findManyByIngredient(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/ingredient/:ingredientId/recipeIngredients')
  async createByIngredientId(
    @Param('ingredientId') ingredientId: string,
    @Body() body: RecipeIngredientCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, ingredientId }

    const item = await this.recipeIngredientDomainFacade.create(valuesUpdated)

    await this.eventService.emit<RecipeIngredientApplicationEvent.RecipeIngredientCreated.Payload>(
      RecipeIngredientApplicationEvent.RecipeIngredientCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
