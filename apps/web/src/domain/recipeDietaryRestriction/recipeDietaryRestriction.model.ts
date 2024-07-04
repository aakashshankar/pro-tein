import { Recipe } from '../recipe'

import { DietaryRestriction } from '../dietaryRestriction'

export class RecipeDietaryRestriction {
  id: string

  recipeId: string

  recipe?: Recipe

  dietaryRestrictionId: string

  dietaryRestriction?: DietaryRestriction

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
