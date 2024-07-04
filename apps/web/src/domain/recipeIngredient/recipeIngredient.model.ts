import { Recipe } from '../recipe'

import { Ingredient } from '../ingredient'

export class RecipeIngredient {
  id: string

  quantity: number

  unit: string

  recipeId: string

  recipe?: Recipe

  ingredientId: string

  ingredient?: Ingredient

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
