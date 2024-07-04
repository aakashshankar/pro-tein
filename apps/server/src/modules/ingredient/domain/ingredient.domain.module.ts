import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { IngredientDomainFacade } from './ingredient.domain.facade'
import { Ingredient } from './ingredient.model'

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient]), DatabaseHelperModule],
  providers: [IngredientDomainFacade, IngredientDomainFacade],
  exports: [IngredientDomainFacade],
})
export class IngredientDomainModule {}
