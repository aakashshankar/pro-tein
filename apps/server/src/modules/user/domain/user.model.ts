import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Notification } from '../../../modules/notification/domain'

import { Recipe } from '../../../modules/recipe/domain'

import { Review } from '../../../modules/review/domain'

import { SavedRecipe } from '../../../modules/savedRecipe/domain'

import { Follow } from '../../../modules/follow/domain'

export enum UserStatus {
  VERIFIED = 'VERIFIED',
  CREATED = 'CREATED',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true, unique: true })
  email?: string

  @Column({ nullable: true })
  name?: string

  @Column({ nullable: true })
  pictureUrl?: string

  @Column({ nullable: true, select: false })
  stripeCustomerId?: string

  @Column({ nullable: true, select: false })
  password?: string

  @Column({ enum: UserStatus, default: UserStatus.VERIFIED })
  status: UserStatus

  @OneToMany(() => Recipe, child => child.user)
  recipes?: Recipe[]

  @OneToMany(() => Review, child => child.user)
  reviews?: Review[]

  @OneToMany(() => SavedRecipe, child => child.user)
  savedRecipes?: SavedRecipe[]

  @OneToMany(() => Follow, child => child.follower)
  followsAsFollower?: Follow[]

  @OneToMany(() => Follow, child => child.followee)
  followsAsFollowee?: Follow[]

  @OneToMany(() => Notification, notification => notification.user)
  notifications?: Notification[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
