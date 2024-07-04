import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { RecipeDietaryRestriction } from './recipeDietaryRestriction.model'

import { Recipe } from '../../recipe/domain'

import { DietaryRestriction } from '../../dietaryRestriction/domain'

@Injectable()
export class RecipeDietaryRestrictionDomainFacade {
  constructor(
    @InjectRepository(RecipeDietaryRestriction)
    private repository: Repository<RecipeDietaryRestriction>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<RecipeDietaryRestriction>,
  ): Promise<RecipeDietaryRestriction> {
    return this.repository.save(values)
  }

  async update(
    item: RecipeDietaryRestriction,
    values: Partial<RecipeDietaryRestriction>,
  ): Promise<RecipeDietaryRestriction> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: RecipeDietaryRestriction): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<RecipeDietaryRestriction> = {},
  ): Promise<RecipeDietaryRestriction[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<RecipeDietaryRestriction> = {},
  ): Promise<RecipeDietaryRestriction> {
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

  async findManyByRecipe(
    item: Recipe,
    queryOptions: RequestHelper.QueryOptions<RecipeDietaryRestriction> = {},
  ): Promise<RecipeDietaryRestriction[]> {
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

  async findManyByDietaryRestriction(
    item: DietaryRestriction,
    queryOptions: RequestHelper.QueryOptions<RecipeDietaryRestriction> = {},
  ): Promise<RecipeDietaryRestriction[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('dietaryRestriction')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        dietaryRestrictionId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
