import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { RecipeApplicationModule } from './recipe/application'

import { IngredientApplicationModule } from './ingredient/application'

import { RecipeIngredientApplicationModule } from './recipeIngredient/application'

import { DietaryRestrictionApplicationModule } from './dietaryRestriction/application'

import { RecipeDietaryRestrictionApplicationModule } from './recipeDietaryRestriction/application'

import { ReviewApplicationModule } from './review/application'

import { SavedRecipeApplicationModule } from './savedRecipe/application'

import { FollowApplicationModule } from './follow/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { BillingApplicationModule } from './billing/application'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,
    BillingApplicationModule,

    RecipeApplicationModule,

    IngredientApplicationModule,

    RecipeIngredientApplicationModule,

    DietaryRestrictionApplicationModule,

    RecipeDietaryRestrictionApplicationModule,

    ReviewApplicationModule,

    SavedRecipeApplicationModule,

    FollowApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
