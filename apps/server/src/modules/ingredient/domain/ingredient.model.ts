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

import { RecipeIngredient } from '../../../modules/recipeIngredient/domain'

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  name: string

  @Column({ nullable: true })
  type?: string

  @OneToMany(() => RecipeIngredient, child => child.ingredient)
  recipeIngredients?: RecipeIngredient[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
