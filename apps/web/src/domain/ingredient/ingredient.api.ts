import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Ingredient } from './ingredient.model'

export class IngredientApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Ingredient>,
  ): Promise<Ingredient[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/ingredients${buildOptions}`)
  }

  static findOne(
    ingredientId: string,
    queryOptions?: ApiHelper.QueryOptions<Ingredient>,
  ): Promise<Ingredient> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/ingredients/${ingredientId}${buildOptions}`)
  }

  static createOne(values: Partial<Ingredient>): Promise<Ingredient> {
    return HttpService.api.post(`/v1/ingredients`, values)
  }

  static updateOne(
    ingredientId: string,
    values: Partial<Ingredient>,
  ): Promise<Ingredient> {
    return HttpService.api.patch(`/v1/ingredients/${ingredientId}`, values)
  }

  static deleteOne(ingredientId: string): Promise<void> {
    return HttpService.api.delete(`/v1/ingredients/${ingredientId}`)
  }
}
