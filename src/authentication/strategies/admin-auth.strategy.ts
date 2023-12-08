import { AuthConfig } from './../../config/auth.config';
import { AuthenticationStrategies } from './../constants/authentication-strategies';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ExtractJwt} from 'passport-jwt';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { StaffRole } from 'src/user/enum/role.enum';

@Injectable()
export class AdminAuthStrategy extends PassportStrategy(Strategy, AuthenticationStrategies.staffAdmin) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: AuthConfig.jwt.secret
        })
    }

    async validate(payload: any) {
        if(!payload.roles || !payload.roles.includes(StaffRole.admin)) {
            throw new UnauthorizedException();
        }
        
        return {
            roles: payload.roles,
            sub: payload.sub,
            subscriptionId: payload.subscriptionId
        };
    }
}