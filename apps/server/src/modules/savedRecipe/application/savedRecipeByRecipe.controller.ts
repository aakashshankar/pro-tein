import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { SavedRecipeDomainFacade } from '@server/modules/savedRecipe/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { SavedRecipeApplicationEvent } from './savedRecipe.application.event'
import { SavedRecipeCreateDto } from './savedRecipe.dto'

import { RecipeDomainFacade } from '../../recipe/domain'

@Controller('/v1/recipes')
export class SavedRecipeByRecipeController {
  constructor(
    private recipeDomainFacade: RecipeDomainFacade,

    private savedRecipeDomainFacade: SavedRecipeDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/recipe/:recipeId/savedRecipes')
  async findManyRecipeId(
    @Param('recipeId') recipeId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.recipeDomainFacade.findOneByIdOrFail(recipeId)

    const items = await this.savedRecipeDomainFacade.findManyByRecipe(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/recipe/:recipeId/savedRecipes')
  async createByRecipeId(
    @Param('recipeId') recipeId: string,
    @Body() body: SavedRecipeCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, recipeId }

    const item = await this.savedRecipeDomainFacade.create(valuesUpdated)

    await this.eventService.emit<SavedRecipeApplicationEvent.SavedRecipeCreated.Payload>(
      SavedRecipeApplicationEvent.SavedRecipeCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
