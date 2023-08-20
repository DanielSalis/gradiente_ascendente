import { CanActivate, Injectable } from '@nestjs/common'

@Injectable()
export class PartnerKeyGuard implements CanActivate {
  canActivate(): boolean {
    // regra para checkar a key do usuario
    return true
  }
}
