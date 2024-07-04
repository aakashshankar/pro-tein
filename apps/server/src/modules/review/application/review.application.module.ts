import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ReviewDomainModule } from '../domain'
import { ReviewController } from './review.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { ReviewByUserController } from './reviewByUser.controller'

import { RecipeDomainModule } from '../../../modules/recipe/domain'

import { ReviewByRecipeController } from './reviewByRecipe.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ReviewDomainModule,

    UserDomainModule,

    RecipeDomainModule,
  ],
  controllers: [
    ReviewController,

    ReviewByUserController,

    ReviewByRecipeController,
  ],
  providers: [],
})
export class ReviewApplicationModule {}
