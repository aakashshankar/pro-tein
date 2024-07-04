import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { SavedRecipe } from './savedRecipe.model'

export class SavedRecipeApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<SavedRecipe>,
  ): Promise<SavedRecipe[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/savedRecipes${buildOptions}`)
  }

  static findOne(
    savedRecipeId: string,
    queryOptions?: ApiHelper.QueryOptions<SavedRecipe>,
  ): Promise<SavedRecipe> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/savedRecipes/${savedRecipeId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<SavedRecipe>): Promise<SavedRecipe> {
    return HttpService.api.post(`/v1/savedRecipes`, values)
  }

  static updateOne(
    savedRecipeId: string,
    values: Partial<SavedRecipe>,
  ): Promise<SavedRecipe> {
    return HttpService.api.patch(`/v1/savedRecipes/${savedRecipeId}`, values)
  }

  static deleteOne(savedRecipeId: string): Promise<void> {
    return HttpService.api.delete(`/v1/savedRecipes/${savedRecipeId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<SavedRecipe>,
  ): Promise<SavedRecipe[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/savedRecipes${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<SavedRecipe>,
  ): Promise<SavedRecipe> {
    return HttpService.api.post(`/v1/users/user/${userId}/savedRecipes`, values)
  }

  static findManyByRecipeId(
    recipeId: string,
    queryOptions?: ApiHelper.QueryOptions<SavedRecipe>,
  ): Promise<SavedRecipe[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/recipes/recipe/${recipeId}/savedRecipes${buildOptions}`,
    )
  }

  static createOneByRecipeId(
    recipeId: string,
    values: Partial<SavedRecipe>,
  ): Promise<SavedRecipe> {
    return HttpService.api.post(
      `/v1/recipes/recipe/${recipeId}/savedRecipes`,
      values,
    )
  }
}
