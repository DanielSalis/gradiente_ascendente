import { Module } from '@nestjs/common'

import { AiAdapter } from '@app/adapter/ai.adapter'

@Module({
  providers: [AiAdapter],
  exports: [AiAdapter]
})
export class AdapterModule {}
