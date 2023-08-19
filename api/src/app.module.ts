import { Module } from '@nestjs/common'
import { HealthCheckAction } from '@app/action/healthcheck.action';

@Module({
  controllers: [HealthCheckAction],
  providers: []
})
export class AppModule {}
