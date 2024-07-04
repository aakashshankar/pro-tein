import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { RecipeIngredient } from './recipeIngredient.model'

import { Recipe } from '../../recipe/domain'

import { Ingredient } from '../../ingredient/domain'

@Injectable()
export class RecipeIngredientDomainFacade {
  constructor(
    @InjectRepository(RecipeIngredient)
    private repository: Repository<RecipeIngredient>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<RecipeIngredient>): Promise<RecipeIngredient> {
    return this.repository.save(values)
  }

  async update(
    item: RecipeIngredient,
    values: Partial<RecipeIngredient>,
  ): Promise<RecipeIngredient> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: RecipeIngredient): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<RecipeIngredient> = {},
  ): Promise<RecipeIngredient[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<RecipeIngredient> = {},
  ): Promise<RecipeIngredient> {
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
    queryOptions: RequestHelper.QueryOptions<RecipeIngredient> = {},
  ): Promise<RecipeIngredient[]> {
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

  async findManyByIngredient(
    item: Ingredient,
    queryOptions: RequestHelper.QueryOptions<RecipeIngredient> = {},
  ): Promise<RecipeIngredient[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('ingredient')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        ingredientId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
