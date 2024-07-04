import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Follow } from './follow.model'

export class FollowApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Follow>,
  ): Promise<Follow[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/follows${buildOptions}`)
  }

  static findOne(
    followId: string,
    queryOptions?: ApiHelper.QueryOptions<Follow>,
  ): Promise<Follow> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/follows/${followId}${buildOptions}`)
  }

  static createOne(values: Partial<Follow>): Promise<Follow> {
    return HttpService.api.post(`/v1/follows`, values)
  }

  static updateOne(followId: string, values: Partial<Follow>): Promise<Follow> {
    return HttpService.api.patch(`/v1/follows/${followId}`, values)
  }

  static deleteOne(followId: string): Promise<void> {
    return HttpService.api.delete(`/v1/follows/${followId}`)
  }

  static findManyByFollowerId(
    followerId: string,
    queryOptions?: ApiHelper.QueryOptions<Follow>,
  ): Promise<Follow[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/follower/${followerId}/follows${buildOptions}`,
    )
  }

  static createOneByFollowerId(
    followerId: string,
    values: Partial<Follow>,
  ): Promise<Follow> {
    return HttpService.api.post(
      `/v1/users/follower/${followerId}/follows`,
      values,
    )
  }

  static findManyByFolloweeId(
    followeeId: string,
    queryOptions?: ApiHelper.QueryOptions<Follow>,
  ): Promise<Follow[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/followee/${followeeId}/follows${buildOptions}`,
    )
  }

  static createOneByFolloweeId(
    followeeId: string,
    values: Partial<Follow>,
  ): Promise<Follow> {
    return HttpService.api.post(
      `/v1/users/followee/${followeeId}/follows`,
      values,
    )
  }
}
