"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const authentication_module_1 = require("./../authentication/authentication.module");
const common_module_1 = require("./../common/common.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_repository_1 = require("./repositories/user.repository");
const user_controller_1 = require("./controllers/user.controller");
const create_user_service_1 = require("./services/create-user.service");
const update_user_service_1 = require("./services/update-user.service");
const user_eraser_service_1 = require("./services/user-eraser.service");
const user_finder_service_1 = require("./services/user-finder.service");
const user_authentication_service_1 = require("./services/user-authentication.service");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                user_repository_1.UserRepository,
            ]),
            common_module_1.CommonModule,
            authentication_module_1.AuthenticationModule
        ],
        controllers: [
            user_controller_1.UserController
        ],
        providers: [
            create_user_service_1.CreateUserService,
            update_user_service_1.UpdateUserService,
            user_eraser_service_1.UserEraserService,
            user_finder_service_1.UserFinderService,
            user_authentication_service_1.UserAutenticationService
        ],
        exports: [
            user_authentication_service_1.UserAutenticationService
        ]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map