import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ReviewDomainFacade } from '@server/modules/review/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ReviewApplicationEvent } from './review.application.event'
import { ReviewCreateDto } from './review.dto'

import { RecipeDomainFacade } from '../../recipe/domain'

@Controller('/v1/recipes')
export class ReviewByRecipeController {
  constructor(
    private recipeDomainFacade: RecipeDomainFacade,

    private reviewDomainFacade: ReviewDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/recipe/:recipeId/reviews')
  async findManyRecipeId(
    @Param('recipeId') recipeId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.recipeDomainFacade.findOneByIdOrFail(recipeId)

    const items = await this.reviewDomainFacade.findManyByRecipe(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/recipe/:recipeId/reviews')
  async createByRecipeId(
    @Param('recipeId') recipeId: string,
    @Body() body: ReviewCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, recipeId }

    const item = await this.reviewDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ReviewApplicationEvent.ReviewCreated.Payload>(
      ReviewApplicationEvent.ReviewCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
