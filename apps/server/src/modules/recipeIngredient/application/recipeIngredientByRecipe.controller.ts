import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { RecipeIngredientDomainFacade } from '@server/modules/recipeIngredient/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RecipeIngredientApplicationEvent } from './recipeIngredient.application.event'
import { RecipeIngredientCreateDto } from './recipeIngredient.dto'

import { RecipeDomainFacade } from '../../recipe/domain'

@Controller('/v1/recipes')
export class RecipeIngredientByRecipeController {
  constructor(
    private recipeDomainFacade: RecipeDomainFacade,

    private recipeIngredientDomainFacade: RecipeIngredientDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/recipe/:recipeId/recipeIngredients')
  async findManyRecipeId(
    @Param('recipeId') recipeId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.recipeDomainFacade.findOneByIdOrFail(recipeId)

    const items = await this.recipeIngredientDomainFacade.findManyByRecipe(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/recipe/:recipeId/recipeIngredients')
  async createByRecipeId(
    @Param('recipeId') recipeId: string,
    @Body() body: RecipeIngredientCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, recipeId }

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
