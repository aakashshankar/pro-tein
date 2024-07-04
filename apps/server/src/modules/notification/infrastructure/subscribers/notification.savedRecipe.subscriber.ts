import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'
import { SocketService } from '@server/libraries/socket'
import { SavedRecipeApplicationEvent } from '@server/modules/savedRecipe/application'
import { AuthorizationDomainFacade } from '@server/modules/authorization/domain'
import {
  Notification,
  NotificationDomainFacade,
} from '@server/modules/notification/domain'

@Injectable()
export class NotificationSavedRecipeSubscriber {
  constructor(
    private notificationDomainFacade: NotificationDomainFacade,
    private authorizationDomainFacade: AuthorizationDomainFacade,
    private socketService: SocketService,
  ) {}

  @OnEvent(SavedRecipeApplicationEvent.SavedRecipeCreated.key)
  async handleCreation(
    data: SavedRecipeApplicationEvent.SavedRecipeCreated.Payload,
  ) {
    const values: Partial<Notification> = {
      title: 'Admin',
      message: 'A new savedRecipe has been created',
      senderName: 'API',
    }

    const role =
      await this.authorizationDomainFacade.role.findOneByNameOrFail('admin')

    for (const { userId } of role.roleUsers) {
      const isCreator = userId === data.userId

      if (isCreator) {
        continue
      }

      const notification = await this.notificationDomainFacade.create({
        ...values,
        userId,
      })

      this.socketService.send(userId, 'notification.created', notification)
    }
  }
}
