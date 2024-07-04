import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { RecipeDomainModule } from './recipe/domain'

import { IngredientDomainModule } from './ingredient/domain'

import { RecipeIngredientDomainModule } from './recipeIngredient/domain'

import { DietaryRestrictionDomainModule } from './dietaryRestriction/domain'

import { RecipeDietaryRestrictionDomainModule } from './recipeDietaryRestriction/domain'

import { ReviewDomainModule } from './review/domain'

import { SavedRecipeDomainModule } from './savedRecipe/domain'

import { FollowDomainModule } from './follow/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    RecipeDomainModule,

    IngredientDomainModule,

    RecipeIngredientDomainModule,

    DietaryRestrictionDomainModule,

    RecipeDietaryRestrictionDomainModule,

    ReviewDomainModule,

    SavedRecipeDomainModule,

    FollowDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
