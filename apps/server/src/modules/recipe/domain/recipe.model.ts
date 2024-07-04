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

import { RecipeIngredient } from '../../../modules/recipeIngredient/domain'

import { RecipeDietaryRestriction } from '../../../modules/recipeDietaryRestriction/domain'

import { Review } from '../../../modules/review/domain'

import { SavedRecipe } from '../../../modules/savedRecipe/domain'

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  title: string

  @Column({ nullable: true })
  description?: string

  @Column({ nullable: true })
  instructions?: string

  @ColumnNumeric({ nullable: true, type: 'numeric' })
  cookingTime?: number

  @Column({ nullable: true })
  nutritionalInfo?: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.recipes)
  @JoinColumn({ name: 'userId' })
  user?: User

  @OneToMany(() => RecipeIngredient, child => child.recipe)
  recipeIngredients?: RecipeIngredient[]

  @OneToMany(() => RecipeDietaryRestriction, child => child.recipe)
  recipeDietaryRestrictions?: RecipeDietaryRestriction[]

  @OneToMany(() => Review, child => child.recipe)
  reviews?: Review[]

  @OneToMany(() => SavedRecipe, child => child.recipe)
  savedRecipes?: SavedRecipe[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
