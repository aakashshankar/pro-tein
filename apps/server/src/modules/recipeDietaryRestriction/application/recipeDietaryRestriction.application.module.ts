import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { RecipeDietaryRestrictionDomainModule } from '../domain'
import { RecipeDietaryRestrictionController } from './recipeDietaryRestriction.controller'

import { RecipeDomainModule } from '../../../modules/recipe/domain'

import { RecipeDietaryRestrictionByRecipeController } from './recipeDietaryRestrictionByRecipe.controller'

import { DietaryRestrictionDomainModule } from '../../../modules/dietaryRestriction/domain'

import { RecipeDietaryRestrictionByDietaryRestrictionController } from './recipeDietaryRestrictionByDietaryRestriction.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    RecipeDietaryRestrictionDomainModule,

    RecipeDomainModule,

    DietaryRestrictionDomainModule,
  ],
  controllers: [
    RecipeDietaryRestrictionController,

    RecipeDietaryRestrictionByRecipeController,

    RecipeDietaryRestrictionByDietaryRestrictionController,
  ],
  providers: [],
})
export class RecipeDietaryRestrictionApplicationModule {}
