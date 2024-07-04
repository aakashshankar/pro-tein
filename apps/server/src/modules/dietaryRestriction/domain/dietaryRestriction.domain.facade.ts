import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { DietaryRestriction } from './dietaryRestriction.model'

@Injectable()
export class DietaryRestrictionDomainFacade {
  constructor(
    @InjectRepository(DietaryRestriction)
    private repository: Repository<DietaryRestriction>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<DietaryRestriction>,
  ): Promise<DietaryRestriction> {
    return this.repository.save(values)
  }

  async update(
    item: DietaryRestriction,
    values: Partial<DietaryRestriction>,
  ): Promise<DietaryRestriction> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: DietaryRestriction): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<DietaryRestriction> = {},
  ): Promise<DietaryRestriction[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<DietaryRestriction> = {},
  ): Promise<DietaryRestriction> {
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
