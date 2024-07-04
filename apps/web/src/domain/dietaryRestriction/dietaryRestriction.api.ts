import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { DietaryRestriction } from './dietaryRestriction.model'

export class DietaryRestrictionApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<DietaryRestriction>,
  ): Promise<DietaryRestriction[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/dietaryRestrictions${buildOptions}`)
  }

  static findOne(
    dietaryRestrictionId: string,
    queryOptions?: ApiHelper.QueryOptions<DietaryRestriction>,
  ): Promise<DietaryRestriction> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/dietaryRestrictions/${dietaryRestrictionId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<DietaryRestriction>,
  ): Promise<DietaryRestriction> {
    return HttpService.api.post(`/v1/dietaryRestrictions`, values)
  }

  static updateOne(
    dietaryRestrictionId: string,
    values: Partial<DietaryRestriction>,
  ): Promise<DietaryRestriction> {
    return HttpService.api.patch(
      `/v1/dietaryRestrictions/${dietaryRestrictionId}`,
      values,
    )
  }

  static deleteOne(dietaryRestrictionId: string): Promise<void> {
    return HttpService.api.delete(
      `/v1/dietaryRestrictions/${dietaryRestrictionId}`,
    )
  }
}
