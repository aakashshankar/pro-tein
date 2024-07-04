import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { RecipeDietaryRestrictionDomainFacade } from './recipeDietaryRestriction.domain.facade'
import { RecipeDietaryRestriction } from './recipeDietaryRestriction.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([RecipeDietaryRestriction]),
    DatabaseHelperModule,
  ],
  providers: [
    RecipeDietaryRestrictionDomainFacade,
    RecipeDietaryRestrictionDomainFacade,
  ],
  exports: [RecipeDietaryRestrictionDomainFacade],
})
export class RecipeDietaryRestrictionDomainModule {}
