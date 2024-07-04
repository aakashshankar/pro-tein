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
  SavedRecipe,
  SavedRecipeDomainFacade,
} from '@server/modules/savedRecipe/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { SavedRecipeApplicationEvent } from './savedRecipe.application.event'
import { SavedRecipeCreateDto, SavedRecipeUpdateDto } from './savedRecipe.dto'

@Controller('/v1/savedRecipes')
export class SavedRecipeController {
  constructor(
    private eventService: EventService,
    private savedRecipeDomainFacade: SavedRecipeDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.savedRecipeDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: SavedRecipeCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.savedRecipeDomainFacade.create(body)

    await this.eventService.emit<SavedRecipeApplicationEvent.SavedRecipeCreated.Payload>(
      SavedRecipeApplicationEvent.SavedRecipeCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:savedRecipeId')
  async findOne(
    @Param('savedRecipeId') savedRecipeId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.savedRecipeDomainFacade.findOneByIdOrFail(
      savedRecipeId,
      queryOptions,
    )

    return item
  }

  @Patch('/:savedRecipeId')
  async update(
    @Param('savedRecipeId') savedRecipeId: string,
    @Body() body: SavedRecipeUpdateDto,
  ) {
    const item =
      await this.savedRecipeDomainFacade.findOneByIdOrFail(savedRecipeId)

    const itemUpdated = await this.savedRecipeDomainFacade.update(
      item,
      body as Partial<SavedRecipe>,
    )
    return itemUpdated
  }

  @Delete('/:savedRecipeId')
  async delete(@Param('savedRecipeId') savedRecipeId: string) {
    const item =
      await this.savedRecipeDomainFacade.findOneByIdOrFail(savedRecipeId)

    await this.savedRecipeDomainFacade.delete(item)

    return item
  }
}
