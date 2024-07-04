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

import { Recipe } from '../../../modules/recipe/domain'

import { DietaryRestriction } from '../../../modules/dietaryRestriction/domain'

@Entity()
export class RecipeDietaryRestriction {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  recipeId: string

  @ManyToOne(() => Recipe, parent => parent.recipeDietaryRestrictions)
  @JoinColumn({ name: 'recipeId' })
  recipe?: Recipe

  @Column({})
  dietaryRestrictionId: string

  @ManyToOne(
    () => DietaryRestriction,
    parent => parent.recipeDietaryRestrictions,
  )
  @JoinColumn({ name: 'dietaryRestrictionId' })
  dietaryRestriction?: DietaryRestriction

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
