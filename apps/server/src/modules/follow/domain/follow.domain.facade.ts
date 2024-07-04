import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Follow } from './follow.model'

import { User } from '../../user/domain'

@Injectable()
export class FollowDomainFacade {
  constructor(
    @InjectRepository(Follow)
    private repository: Repository<Follow>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Follow>): Promise<Follow> {
    return this.repository.save(values)
  }

  async update(item: Follow, values: Partial<Follow>): Promise<Follow> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Follow): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Follow> = {},
  ): Promise<Follow[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Follow> = {},
  ): Promise<Follow> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByFollower(
    item: User,
    queryOptions: RequestHelper.QueryOptions<Follow> = {},
  ): Promise<Follow[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('follower')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        followerId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByFollowee(
    item: User,
    queryOptions: RequestHelper.QueryOptions<Follow> = {},
  ): Promise<Follow[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('followee')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        followeeId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
