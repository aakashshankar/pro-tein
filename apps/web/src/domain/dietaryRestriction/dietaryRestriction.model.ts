import { RecipeDietaryRestriction } from '../recipeDietaryRestriction'

export class DietaryRestriction {
  id: string

  name: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  recipeDietaryRestrictions?: RecipeDietaryRestriction[]
}
