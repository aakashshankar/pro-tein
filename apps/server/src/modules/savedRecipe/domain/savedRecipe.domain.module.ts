import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { SavedRecipeDomainFacade } from './savedRecipe.domain.facade'
import { SavedRecipe } from './savedRecipe.model'

@Module({
  imports: [TypeOrmModule.forFeature([SavedRecipe]), DatabaseHelperModule],
  providers: [SavedRecipeDomainFacade, SavedRecipeDomainFacade],
  exports: [SavedRecipeDomainFacade],
})
export class SavedRecipeDomainModule {}
