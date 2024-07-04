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

import { Ingredient } from '../../../modules/ingredient/domain'

@Entity()
export class RecipeIngredient {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ type: 'numeric' })
  quantity: number

  @Column({})
  unit: string

  @Column({})
  recipeId: string

  @ManyToOne(() => Recipe, parent => parent.recipeIngredients)
  @JoinColumn({ name: 'recipeId' })
  recipe?: Recipe

  @Column({})
  ingredientId: string

  @ManyToOne(() => Ingredient, parent => parent.recipeIngredients)
  @JoinColumn({ name: 'ingredientId' })
  ingredient?: Ingredient

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
