import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Ingredient } from './ingredient.model'

@Injectable()
export class IngredientDomainFacade {
  constructor(
    @InjectRepository(Ingredient)
    private repository: Repository<Ingredient>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Ingredient>): Promise<Ingredient> {
    return this.repository.save(values)
  }

  async update(
    item: Ingredient,
    values: Partial<Ingredient>,
  ): Promise<Ingredient> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Ingredient): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Ingredient> = {},
  ): Promise<Ingredient[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Ingredient> = {},
  ): Promise<Ingredient> {
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
}
