"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAuthStrategy = void 0;
const auth_config_1 = require("./../../config/auth.config");
const authentication_strategies_1 = require("./../constants/authentication-strategies");
const common_1 = require("@nestjs/common");
const passport_jwt_1 = require("passport-jwt");
const passport_local_1 = require("passport-local");
const passport_1 = require("@nestjs/passport");
const role_enum_1 = require("../../user/enum/role.enum");
let AdminAuthStrategy = class AdminAuthStrategy extends passport_1.PassportStrategy(passport_local_1.Strategy, authentication_strategies_1.AuthenticationStrategies.staffAdmin) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: auth_config_1.AuthConfig.jwt.secret
        });
    }
    async validate(payload) {
        if (!payload.roles || !payload.roles.includes(role_enum_1.StaffRole.admin)) {
            throw new common_1.UnauthorizedException();
        }
        return {
            roles: payload.roles,
            sub: payload.sub,
            subscriptionId: payload.subscriptionId
        };
    }
};
AdminAuthStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], AdminAuthStrategy);
exports.AdminAuthStrategy = AdminAuthStrategy;
//# sourceMappingURL=admin-auth.strategy.js.map