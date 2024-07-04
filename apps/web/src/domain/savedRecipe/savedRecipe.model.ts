import { User } from '../user'

import { Recipe } from '../recipe'

export class SavedRecipe {
  id: string

  userId: string

  user?: User

  recipeId: string

  recipe?: Recipe

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
