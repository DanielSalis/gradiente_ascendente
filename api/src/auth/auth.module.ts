import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config'

// import { JwtStrategy } from '@app/auth/jwt.strategy'

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService): JwtModuleOptions => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: configService.get<string>('JWT_EXPIRATION') }
      }),
      inject: [ConfigService]
    })
  ],
  // providers: [JwtStrategy],
  exports: [PassportModule, JwtModule]
})
export class AuthModule {}
