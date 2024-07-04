import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { FollowDomainFacade } from './follow.domain.facade'
import { Follow } from './follow.model'

@Module({
  imports: [TypeOrmModule.forFeature([Follow]), DatabaseHelperModule],
  providers: [FollowDomainFacade, FollowDomainFacade],
  exports: [FollowDomainFacade],
})
export class FollowDomainModule {}
