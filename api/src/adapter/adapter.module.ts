import { Module } from '@nestjs/common'

import { AiAdapter } from '@app/adapter/ai.adapter'

@Module({
  imports: [],
  controllers: [],
  providers: [AiAdapter],
  exports: [AiAdapter]
})
export class AppModule {}
