import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { RecipeIngredient } from './recipeIngredient.model'

export class RecipeIngredientApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<RecipeIngredient>,
  ): Promise<RecipeIngredient[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/recipeIngredients${buildOptions}`)
  }

  static findOne(
    recipeIngredientId: string,
    queryOptions?: ApiHelper.QueryOptions<RecipeIngredient>,
  ): Promise<RecipeIngredient> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/recipeIngredients/${recipeIngredientId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<RecipeIngredient>,
  ): Promise<RecipeIngredient> {
    return HttpService.api.post(`/v1/recipeIngredients`, values)
  }

  static updateOne(
    recipeIngredientId: string,
    values: Partial<RecipeIngredient>,
  ): Promise<RecipeIngredient> {
    return HttpService.api.patch(
      `/v1/recipeIngredients/${recipeIngredientId}`,
      values,
    )
  }

  static deleteOne(recipeIngredientId: string): Promise<void> {
    return HttpService.api.delete(`/v1/recipeIngredients/${recipeIngredientId}`)
  }

  static findManyByRecipeId(
    recipeId: string,
    queryOptions?: ApiHelper.QueryOptions<RecipeIngredient>,
  ): Promise<RecipeIngredient[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/recipes/recipe/${recipeId}/recipeIngredients${buildOptions}`,
    )
  }

  static createOneByRecipeId(
    recipeId: string,
    values: Partial<RecipeIngredient>,
  ): Promise<RecipeIngredient> {
    return HttpService.api.post(
      `/v1/recipes/recipe/${recipeId}/recipeIngredients`,
      values,
    )
  }

  static findManyByIngredientId(
    ingredientId: string,
    queryOptions?: ApiHelper.QueryOptions<RecipeIngredient>,
  ): Promise<RecipeIngredient[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/ingredients/ingredient/${ingredientId}/recipeIngredients${buildOptions}`,
    )
  }

  static createOneByIngredientId(
    ingredientId: string,
    values: Partial<RecipeIngredient>,
  ): Promise<RecipeIngredient> {
    return HttpService.api.post(
      `/v1/ingredients/ingredient/${ingredientId}/recipeIngredients`,
      values,
    )
  }
}
