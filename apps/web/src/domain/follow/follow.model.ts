import { User } from '../user'

export class Follow {
  id: string

  followerId: string

  follower?: User

  followeeId: string

  followee?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
