import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ActionModule } from '@app/action/action.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('PG_HOST') || configService.get('PG_CONTAINER_NAME') || 'localhost',
        port: +configService.get<number>('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true
      }),
      inject: [ConfigService]
    }),
    ActionModule
  ]
})
export class AppModule {}
