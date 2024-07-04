import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { RecipeIngredientDomainFacade } from './recipeIngredient.domain.facade'
import { RecipeIngredient } from './recipeIngredient.model'

@Module({
  imports: [TypeOrmModule.forFeature([RecipeIngredient]), DatabaseHelperModule],
  providers: [RecipeIngredientDomainFacade, RecipeIngredientDomainFacade],
  exports: [RecipeIngredientDomainFacade],
})
export class RecipeIngredientDomainModule {}
