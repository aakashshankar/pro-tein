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
import { Follow, FollowDomainFacade } from '@server/modules/follow/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { FollowApplicationEvent } from './follow.application.event'
import { FollowCreateDto, FollowUpdateDto } from './follow.dto'

@Controller('/v1/follows')
export class FollowController {
  constructor(
    private eventService: EventService,
    private followDomainFacade: FollowDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.followDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: FollowCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.followDomainFacade.create(body)

    await this.eventService.emit<FollowApplicationEvent.FollowCreated.Payload>(
      FollowApplicationEvent.FollowCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:followId')
  async findOne(@Param('followId') followId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.followDomainFacade.findOneByIdOrFail(
      followId,
      queryOptions,
    )

    return item
  }

  @Patch('/:followId')
  async update(
    @Param('followId') followId: string,
    @Body() body: FollowUpdateDto,
  ) {
    const item = await this.followDomainFacade.findOneByIdOrFail(followId)

    const itemUpdated = await this.followDomainFacade.update(
      item,
      body as Partial<Follow>,
    )
    return itemUpdated
  }

  @Delete('/:followId')
  async delete(@Param('followId') followId: string) {
    const item = await this.followDomainFacade.findOneByIdOrFail(followId)

    await this.followDomainFacade.delete(item)

    return item
  }
}
