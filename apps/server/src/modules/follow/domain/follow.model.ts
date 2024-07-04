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

@Entity()
export class Follow {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  followerId: string

  @ManyToOne(() => User, parent => parent.followsAsFollower)
  @JoinColumn({ name: 'followerId' })
  follower?: User

  @Column({})
  followeeId: string

  @ManyToOne(() => User, parent => parent.followsAsFollowee)
  @JoinColumn({ name: 'followeeId' })
  followee?: User

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
