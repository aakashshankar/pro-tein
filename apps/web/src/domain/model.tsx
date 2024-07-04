import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'
import {
  BillingPayment as BillingPaymentModel,
  BillingProduct as BillingProductModel,
  BillingSubscription as BillingSubscriptionModel,
} from './billing/billing.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Recipe as RecipeModel } from './recipe/recipe.model'

import { Ingredient as IngredientModel } from './ingredient/ingredient.model'

import { RecipeIngredient as RecipeIngredientModel } from './recipeIngredient/recipeIngredient.model'

import { DietaryRestriction as DietaryRestrictionModel } from './dietaryRestriction/dietaryRestriction.model'

import { RecipeDietaryRestriction as RecipeDietaryRestrictionModel } from './recipeDietaryRestriction/recipeDietaryRestriction.model'

import { Review as ReviewModel } from './review/review.model'

import { SavedRecipe as SavedRecipeModel } from './savedRecipe/savedRecipe.model'

import { Follow as FollowModel } from './follow/follow.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}
  export class BillingProduct extends BillingProductModel {}
  export class BillingPayment extends BillingPaymentModel {}
  export class BillingSubscription extends BillingSubscriptionModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Recipe extends RecipeModel {}

  export class Ingredient extends IngredientModel {}

  export class RecipeIngredient extends RecipeIngredientModel {}

  export class DietaryRestriction extends DietaryRestrictionModel {}

  export class RecipeDietaryRestriction extends RecipeDietaryRestrictionModel {}

  export class Review extends ReviewModel {}

  export class SavedRecipe extends SavedRecipeModel {}

  export class Follow extends FollowModel {}
}
