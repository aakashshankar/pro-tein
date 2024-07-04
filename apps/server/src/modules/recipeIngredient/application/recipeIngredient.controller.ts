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
  RecipeIngredient,
  RecipeIngredientDomainFacade,
} from '@server/modules/recipeIngredient/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { RecipeIngredientApplicationEvent } from './recipeIngredient.application.event'
import {
  RecipeIngredientCreateDto,
  RecipeIngredientUpdateDto,
} from './recipeIngredient.dto'

@Controller('/v1/recipeIngredients')
export class RecipeIngredientController {
  constructor(
    private eventService: EventService,
    private recipeIngredientDomainFacade: RecipeIngredientDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.recipeIngredientDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: RecipeIngredientCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.recipeIngredientDomainFacade.create(body)

    await this.eventService.emit<RecipeIngredientApplicationEvent.RecipeIngredientCreated.Payload>(
      RecipeIngredientApplicationEvent.RecipeIngredientCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:recipeIngredientId')
  async findOne(
    @Param('recipeIngredientId') recipeIngredientId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.recipeIngredientDomainFacade.findOneByIdOrFail(
      recipeIngredientId,
      queryOptions,
    )

    return item
  }

  @Patch('/:recipeIngredientId')
  async update(
    @Param('recipeIngredientId') recipeIngredientId: string,
    @Body() body: RecipeIngredientUpdateDto,
  ) {
    const item =
      await this.recipeIngredientDomainFacade.findOneByIdOrFail(
        recipeIngredientId,
      )

    const itemUpdated = await this.recipeIngredientDomainFacade.update(
      item,
      body as Partial<RecipeIngredient>,
    )
    return itemUpdated
  }

  @Delete('/:recipeIngredientId')
  async delete(@Param('recipeIngredientId') recipeIngredientId: string) {
    const item =
      await this.recipeIngredientDomainFacade.findOneByIdOrFail(
        recipeIngredientId,
      )

    await this.recipeIngredientDomainFacade.delete(item)

    return item
  }
}
