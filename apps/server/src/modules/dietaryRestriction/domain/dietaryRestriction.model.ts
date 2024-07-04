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

import { RecipeDietaryRestriction } from '../../../modules/recipeDietaryRestriction/domain'

@Entity()
export class DietaryRestriction {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  name: string

  @OneToMany(() => RecipeDietaryRestriction, child => child.dietaryRestriction)
  recipeDietaryRestrictions?: RecipeDietaryRestriction[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
