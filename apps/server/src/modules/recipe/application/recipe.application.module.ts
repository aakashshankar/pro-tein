import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { RecipeDomainModule } from '../domain'
import { RecipeController } from './recipe.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { RecipeByUserController } from './recipeByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, RecipeDomainModule, UserDomainModule],
  controllers: [RecipeController, RecipeByUserController],
  providers: [],
})
export class RecipeApplicationModule {}
