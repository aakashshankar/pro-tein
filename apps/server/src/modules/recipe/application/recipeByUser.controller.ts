import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { RecipeDomainFacade } from '@server/modules/recipe/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RecipeApplicationEvent } from './recipe.application.event'
import { RecipeCreateDto } from './recipe.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class RecipeByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private recipeDomainFacade: RecipeDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/recipes')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.recipeDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/recipes')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: RecipeCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.recipeDomainFacade.create(valuesUpdated)

    await this.eventService.emit<RecipeApplicationEvent.RecipeCreated.Payload>(
      RecipeApplicationEvent.RecipeCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
