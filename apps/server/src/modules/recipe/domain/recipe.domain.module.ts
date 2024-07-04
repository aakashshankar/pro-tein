import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { RecipeDomainFacade } from './recipe.domain.facade'
import { Recipe } from './recipe.model'

@Module({
  imports: [TypeOrmModule.forFeature([Recipe]), DatabaseHelperModule],
  providers: [RecipeDomainFacade, RecipeDomainFacade],
  exports: [RecipeDomainFacade],
})
export class RecipeDomainModule {}
