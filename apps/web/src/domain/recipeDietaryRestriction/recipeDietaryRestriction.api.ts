import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { RecipeDietaryRestriction } from './recipeDietaryRestriction.model'

export class RecipeDietaryRestrictionApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<RecipeDietaryRestriction>,
  ): Promise<RecipeDietaryRestriction[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/recipeDietaryRestrictions${buildOptions}`)
  }

  static findOne(
    recipeDietaryRestrictionId: string,
    queryOptions?: ApiHelper.QueryOptions<RecipeDietaryRestriction>,
  ): Promise<RecipeDietaryRestriction> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/recipeDietaryRestrictions/${recipeDietaryRestrictionId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<RecipeDietaryRestriction>,
  ): Promise<RecipeDietaryRestriction> {
    return HttpService.api.post(`/v1/recipeDietaryRestrictions`, values)
  }

  static updateOne(
    recipeDietaryRestrictionId: string,
    values: Partial<RecipeDietaryRestriction>,
  ): Promise<RecipeDietaryRestriction> {
    return HttpService.api.patch(
      `/v1/recipeDietaryRestrictions/${recipeDietaryRestrictionId}`,
      values,
    )
  }

  static deleteOne(recipeDietaryRestrictionId: string): Promise<void> {
    return HttpService.api.delete(
      `/v1/recipeDietaryRestrictions/${recipeDietaryRestrictionId}`,
    )
  }

  static findManyByRecipeId(
    recipeId: string,
    queryOptions?: ApiHelper.QueryOptions<RecipeDietaryRestriction>,
  ): Promise<RecipeDietaryRestriction[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/recipes/recipe/${recipeId}/recipeDietaryRestrictions${buildOptions}`,
    )
  }

  static createOneByRecipeId(
    recipeId: string,
    values: Partial<RecipeDietaryRestriction>,
  ): Promise<RecipeDietaryRestriction> {
    return HttpService.api.post(
      `/v1/recipes/recipe/${recipeId}/recipeDietaryRestrictions`,
      values,
    )
  }

  static findManyByDietaryRestrictionId(
    dietaryRestrictionId: string,
    queryOptions?: ApiHelper.QueryOptions<RecipeDietaryRestriction>,
  ): Promise<RecipeDietaryRestriction[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/dietaryRestrictions/dietaryRestriction/${dietaryRestrictionId}/recipeDietaryRestrictions${buildOptions}`,
    )
  }

  static createOneByDietaryRestrictionId(
    dietaryRestrictionId: string,
    values: Partial<RecipeDietaryRestriction>,
  ): Promise<RecipeDietaryRestriction> {
    return HttpService.api.post(
      `/v1/dietaryRestrictions/dietaryRestriction/${dietaryRestrictionId}/recipeDietaryRestrictions`,
      values,
    )
  }
}
