import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { BillingApi } from './billing/billing.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { RecipeApi } from './recipe/recipe.api'

import { IngredientApi } from './ingredient/ingredient.api'

import { RecipeIngredientApi } from './recipeIngredient/recipeIngredient.api'

import { DietaryRestrictionApi } from './dietaryRestriction/dietaryRestriction.api'

import { RecipeDietaryRestrictionApi } from './recipeDietaryRestriction/recipeDietaryRestriction.api'

import { ReviewApi } from './review/review.api'

import { SavedRecipeApi } from './savedRecipe/savedRecipe.api'

import { FollowApi } from './follow/follow.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Billing extends BillingApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Recipe extends RecipeApi {}

  export class Ingredient extends IngredientApi {}

  export class RecipeIngredient extends RecipeIngredientApi {}

  export class DietaryRestriction extends DietaryRestrictionApi {}

  export class RecipeDietaryRestriction extends RecipeDietaryRestrictionApi {}

  export class Review extends ReviewApi {}

  export class SavedRecipe extends SavedRecipeApi {}

  export class Follow extends FollowApi {}
}
