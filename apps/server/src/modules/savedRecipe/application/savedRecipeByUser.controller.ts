import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { SavedRecipeDomainFacade } from '@server/modules/savedRecipe/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { SavedRecipeApplicationEvent } from './savedRecipe.application.event'
import { SavedRecipeCreateDto } from './savedRecipe.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class SavedRecipeByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private savedRecipeDomainFacade: SavedRecipeDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/savedRecipes')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.savedRecipeDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/savedRecipes')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: SavedRecipeCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

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
