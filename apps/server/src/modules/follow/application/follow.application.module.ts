import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { FollowDomainModule } from '../domain'
import { FollowController } from './follow.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { FollowByUserController } from './followByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, FollowDomainModule, UserDomainModule],
  controllers: [FollowController, FollowByUserController],
  providers: [],
})
export class FollowApplicationModule {}
