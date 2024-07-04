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
import { Recipe, RecipeDomainFacade } from '@server/modules/recipe/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { RecipeApplicationEvent } from './recipe.application.event'
import { RecipeCreateDto, RecipeUpdateDto } from './recipe.dto'

@Controller('/v1/recipes')
export class RecipeController {
  constructor(
    private eventService: EventService,
    private recipeDomainFacade: RecipeDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.recipeDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: RecipeCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.recipeDomainFacade.create(body)

    await this.eventService.emit<RecipeApplicationEvent.RecipeCreated.Payload>(
      RecipeApplicationEvent.RecipeCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:recipeId')
  async findOne(@Param('recipeId') recipeId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.recipeDomainFacade.findOneByIdOrFail(
      recipeId,
      queryOptions,
    )

    return item
  }

  @Patch('/:recipeId')
  async update(
    @Param('recipeId') recipeId: string,
    @Body() body: RecipeUpdateDto,
  ) {
    const item = await this.recipeDomainFacade.findOneByIdOrFail(recipeId)

    const itemUpdated = await this.recipeDomainFacade.update(
      item,
      body as Partial<Recipe>,
    )
    return itemUpdated
  }

  @Delete('/:recipeId')
  async delete(@Param('recipeId') recipeId: string) {
    const item = await this.recipeDomainFacade.findOneByIdOrFail(recipeId)

    await this.recipeDomainFacade.delete(item)

    return item
  }
}
