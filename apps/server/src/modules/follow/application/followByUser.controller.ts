import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { FollowDomainFacade } from '@server/modules/follow/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { FollowApplicationEvent } from './follow.application.event'
import { FollowCreateDto } from './follow.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class FollowByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private followDomainFacade: FollowDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/follower/:followerId/follows')
  async findManyFollowerId(
    @Param('followerId') followerId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(followerId)

    const items = await this.followDomainFacade.findManyByFollower(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/follower/:followerId/follows')
  async createByFollowerId(
    @Param('followerId') followerId: string,
    @Body() body: FollowCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, followerId }

    const item = await this.followDomainFacade.create(valuesUpdated)

    await this.eventService.emit<FollowApplicationEvent.FollowCreated.Payload>(
      FollowApplicationEvent.FollowCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/followee/:followeeId/follows')
  async findManyFolloweeId(
    @Param('followeeId') followeeId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(followeeId)

    const items = await this.followDomainFacade.findManyByFollowee(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/followee/:followeeId/follows')
  async createByFolloweeId(
    @Param('followeeId') followeeId: string,
    @Body() body: FollowCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, followeeId }

    const item = await this.followDomainFacade.create(valuesUpdated)

    await this.eventService.emit<FollowApplicationEvent.FollowCreated.Payload>(
      FollowApplicationEvent.FollowCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
