import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { SavedRecipeDomainModule } from '../domain'
import { SavedRecipeController } from './savedRecipe.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { SavedRecipeByUserController } from './savedRecipeByUser.controller'

import { RecipeDomainModule } from '../../../modules/recipe/domain'

import { SavedRecipeByRecipeController } from './savedRecipeByRecipe.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    SavedRecipeDomainModule,

    UserDomainModule,

    RecipeDomainModule,
  ],
  controllers: [
    SavedRecipeController,

    SavedRecipeByUserController,

    SavedRecipeByRecipeController,
  ],
  providers: [],
})
export class SavedRecipeApplicationModule {}
