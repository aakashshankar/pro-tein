import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { RecipeIngredientDomainModule } from '../domain'
import { RecipeIngredientController } from './recipeIngredient.controller'

import { RecipeDomainModule } from '../../../modules/recipe/domain'

import { RecipeIngredientByRecipeController } from './recipeIngredientByRecipe.controller'

import { IngredientDomainModule } from '../../../modules/ingredient/domain'

import { RecipeIngredientByIngredientController } from './recipeIngredientByIngredient.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    RecipeIngredientDomainModule,

    RecipeDomainModule,

    IngredientDomainModule,
  ],
  controllers: [
    RecipeIngredientController,

    RecipeIngredientByRecipeController,

    RecipeIngredientByIngredientController,
  ],
  providers: [],
})
export class RecipeIngredientApplicationModule {}
