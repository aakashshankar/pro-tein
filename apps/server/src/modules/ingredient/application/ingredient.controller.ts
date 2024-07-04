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
  Ingredient,
  IngredientDomainFacade,
} from '@server/modules/ingredient/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { IngredientApplicationEvent } from './ingredient.application.event'
import { IngredientCreateDto, IngredientUpdateDto } from './ingredient.dto'

@Controller('/v1/ingredients')
export class IngredientController {
  constructor(
    private eventService: EventService,
    private ingredientDomainFacade: IngredientDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.ingredientDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: IngredientCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.ingredientDomainFacade.create(body)

    await this.eventService.emit<IngredientApplicationEvent.IngredientCreated.Payload>(
      IngredientApplicationEvent.IngredientCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:ingredientId')
  async findOne(
    @Param('ingredientId') ingredientId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.ingredientDomainFacade.findOneByIdOrFail(
      ingredientId,
      queryOptions,
    )

    return item
  }

  @Patch('/:ingredientId')
  async update(
    @Param('ingredientId') ingredientId: string,
    @Body() body: IngredientUpdateDto,
  ) {
    const item =
      await this.ingredientDomainFacade.findOneByIdOrFail(ingredientId)

    const itemUpdated = await this.ingredientDomainFacade.update(
      item,
      body as Partial<Ingredient>,
    )
    return itemUpdated
  }

  @Delete('/:ingredientId')
  async delete(@Param('ingredientId') ingredientId: string) {
    const item =
      await this.ingredientDomainFacade.findOneByIdOrFail(ingredientId)

    await this.ingredientDomainFacade.delete(item)

    return item
  }
}
