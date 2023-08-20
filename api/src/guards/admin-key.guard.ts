import { CanActivate, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AdminKeyGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService, private readonly configService: ConfigService) {}
  canActivate(): boolean {

    // regra para checkar a key do usuario
    return true
  }
}
