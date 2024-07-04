import { User } from '../user'

import { RecipeIngredient } from '../recipeIngredient'

import { RecipeDietaryRestriction } from '../recipeDietaryRestriction'

import { Review } from '../review'

import { SavedRecipe } from '../savedRecipe'

export class Recipe {
  id: string

  title: string

  description?: string

  instructions?: string

  cookingTime?: number

  nutritionalInfo?: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  recipeIngredients?: RecipeIngredient[]

  recipeDietaryRestrictions?: RecipeDietaryRestriction[]

  reviews?: Review[]

  savedRecipes?: SavedRecipe[]
}
