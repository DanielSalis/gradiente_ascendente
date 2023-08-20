import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService, private readonly configService: ConfigService) {}
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    const authHeader = request.headers.authorization
    const [_, token] = authHeader.split(' ')
    const payload = this.jwtService.verify(token, { secret: this.configService.get('JWT_SECRET') })
    if (!payload) return false
    request.user = payload
    return true
  }
}
