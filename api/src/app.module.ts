import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { ActionModule } from '@app/action/action.module'

@Module({
  imports: [ConfigModule.forRoot(), ActionModule]
})
export class AppModule {}
