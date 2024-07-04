import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { DietaryRestrictionDomainFacade } from './dietaryRestriction.domain.facade'
import { DietaryRestriction } from './dietaryRestriction.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([DietaryRestriction]),
    DatabaseHelperModule,
  ],
  providers: [DietaryRestrictionDomainFacade, DietaryRestrictionDomainFacade],
  exports: [DietaryRestrictionDomainFacade],
})
export class DietaryRestrictionDomainModule {}
