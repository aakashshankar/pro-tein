import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { IngredientDomainModule } from '../domain'
import { IngredientController } from './ingredient.controller'

@Module({
  imports: [AuthenticationDomainModule, IngredientDomainModule],
  controllers: [IngredientController],
  providers: [],
})
export class IngredientApplicationModule {}
