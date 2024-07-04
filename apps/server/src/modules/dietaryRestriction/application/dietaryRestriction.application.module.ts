import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { DietaryRestrictionDomainModule } from '../domain'
import { DietaryRestrictionController } from './dietaryRestriction.controller'

@Module({
  imports: [AuthenticationDomainModule, DietaryRestrictionDomainModule],
  controllers: [DietaryRestrictionController],
  providers: [],
})
export class DietaryRestrictionApplicationModule {}
