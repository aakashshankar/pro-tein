import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationRecipeSubscriber } from './subscribers/notification.recipe.subscriber'

import { NotificationIngredientSubscriber } from './subscribers/notification.ingredient.subscriber'

import { NotificationRecipeIngredientSubscriber } from './subscribers/notification.recipeIngredient.subscriber'

import { NotificationDietaryRestrictionSubscriber } from './subscribers/notification.dietaryRestriction.subscriber'

import { NotificationRecipeDietaryRestrictionSubscriber } from './subscribers/notification.recipeDietaryRestriction.subscriber'

import { NotificationReviewSubscriber } from './subscribers/notification.review.subscriber'

import { NotificationSavedRecipeSubscriber } from './subscribers/notification.savedRecipe.subscriber'

import { NotificationFollowSubscriber } from './subscribers/notification.follow.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationRecipeSubscriber,

    NotificationIngredientSubscriber,

    NotificationRecipeIngredientSubscriber,

    NotificationDietaryRestrictionSubscriber,

    NotificationRecipeDietaryRestrictionSubscriber,

    NotificationReviewSubscriber,

    NotificationSavedRecipeSubscriber,

    NotificationFollowSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
