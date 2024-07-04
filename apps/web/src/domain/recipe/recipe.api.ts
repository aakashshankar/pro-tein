import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Recipe } from './recipe.model'

export class RecipeApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Recipe>,
  ): Promise<Recipe[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/recipes${buildOptions}`)
  }

  static findOne(
    recipeId: string,
    queryOptions?: ApiHelper.QueryOptions<Recipe>,
  ): Promise<Recipe> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/recipes/${recipeId}${buildOptions}`)
  }

  static createOne(values: Partial<Recipe>): Promise<Recipe> {
    return HttpService.api.post(`/v1/recipes`, values)
  }

  static updateOne(recipeId: string, values: Partial<Recipe>): Promise<Recipe> {
    return HttpService.api.patch(`/v1/recipes/${recipeId}`, values)
  }

  static deleteOne(recipeId: string): Promise<void> {
    return HttpService.api.delete(`/v1/recipes/${recipeId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Recipe>,
  ): Promise<Recipe[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/recipes${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Recipe>,
  ): Promise<Recipe> {
    return HttpService.api.post(`/v1/users/user/${userId}/recipes`, values)
  }
}
