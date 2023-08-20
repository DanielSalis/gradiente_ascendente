// import { Injectable, UnauthorizedException } from '@nestjs/common'
// import { PassportStrategy } from '@nestjs/passport'
// import { Strategy, ExtractJwt } from 'passport-jwt'
// import { ConfigService } from '@nestjs/config'

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private readonly configService: ConfigService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//       secretOrKey: configService.get('JWT_SECRET')
//     })
//   }

//   async validate(payload: any) {
//     console.log(`[JwtStrategy] validate: payload=${JSON.stringify(payload)}`)
//     return { userId: payload.sub, email: payload.email };
//   }
// }
