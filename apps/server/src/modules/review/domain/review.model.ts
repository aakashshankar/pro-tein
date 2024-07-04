import { ColumnNumeric } from '@server/core/database'
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

import { User } from '../../../modules/user/domain'

import { Recipe } from '../../../modules/recipe/domain'

@Entity()
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ type: 'numeric' })
  rating: number

  @Column({ nullable: true })
  comment?: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.reviews)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({})
  recipeId: string

  @ManyToOne(() => Recipe, parent => parent.reviews)
  @JoinColumn({ name: 'recipeId' })
  recipe?: Recipe

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
