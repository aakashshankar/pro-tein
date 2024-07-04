import { Notification } from '../notification'

import { Recipe } from '../recipe'

import { Review } from '../review'

import { SavedRecipe } from '../savedRecipe'

import { Follow } from '../follow'

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email?: string
  status: UserStatus
  name?: string
  pictureUrl?: string
  password?: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

  recipes?: Recipe[]

  reviews?: Review[]

  savedRecipes?: SavedRecipe[]

  followsAsFollower?: Follow[]

  followsAsFollowee?: Follow[]
}
