import { RecipeIngredient } from '../recipeIngredient'

export class Ingredient {
  id: string

  name: string

  type?: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  recipeIngredients?: RecipeIngredient[]
}
