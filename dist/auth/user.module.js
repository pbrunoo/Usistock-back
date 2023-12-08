"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsModule = void 0;
const user_repository_1 = require("./../user/repositories/user.repository");
const user_service_1 = require("./user.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let UsModule = UsModule_1 = class UsModule {
};
UsModule = UsModule_1 = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                user_repository_1.UserRepository,
            ]),
        ],
        controllers: [],
        providers: [
            user_service_1.UsService
        ],
        exports: [
            UsModule_1,
            user_service_1.UsService
        ]
    })
], UsModule);
exports.UsModule = UsModule;
//# sourceMappingURL=user.module.js.map