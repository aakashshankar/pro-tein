import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { SavedRecipe } from './savedRecipe.model'

import { User } from '../../user/domain'

import { Recipe } from '../../recipe/domain'

@Injectable()
export class SavedRecipeDomainFacade {
  constructor(
    @InjectRepository(SavedRecipe)
    private repository: Repository<SavedRecipe>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<SavedRecipe>): Promise<SavedRecipe> {
    return this.repository.save(values)
  }

  async update(
    item: SavedRecipe,
    values: Partial<SavedRecipe>,
  ): Promise<SavedRecipe> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: SavedRecipe): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<SavedRecipe> = {},
  ): Promise<SavedRecipe[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<SavedRecipe> = {},
  ): Promise<SavedRecipe> {
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

  async findManyByUser(
    item: User,
    queryOptions: RequestHelper.QueryOptions<SavedRecipe> = {},
  ): Promise<SavedRecipe[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('user')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        userId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByRecipe(
    item: Recipe,
    queryOptions: RequestHelper.QueryOptions<SavedRecipe> = {},
  ): Promise<SavedRecipe[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('recipe')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        recipeId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
