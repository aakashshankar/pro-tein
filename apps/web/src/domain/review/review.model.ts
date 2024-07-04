import { User } from '../user'

import { Recipe } from '../recipe'

export class Review {
  id: string

  rating: number

  comment?: string

  userId: string

  user?: User

  recipeId: string

  recipe?: Recipe

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
