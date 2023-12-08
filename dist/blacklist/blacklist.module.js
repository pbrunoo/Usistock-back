"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackListModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const blacklist_repository_1 = require("./repositories/blacklist.repository");
const blacklist_controller_1 = require("./controllers/blacklist.controller");
const create_blacklist_service_1 = require("./services/create-blacklist.service");
const update_blacklist_service_1 = require("./services/update-blacklist.service");
const blacklist_eraser_service_1 = require("./services/blacklist-eraser.service");
const blacklist_finder_service_1 = require("./services/blacklist-finder.service");
let BlackListModule = class BlackListModule {
};
BlackListModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                blacklist_repository_1.BlackListRepository,
            ])
        ],
        controllers: [
            blacklist_controller_1.BlacklistController
        ],
        providers: [
            create_blacklist_service_1.CreateBlackListService,
            update_blacklist_service_1.UpdateBlackListService,
            blacklist_eraser_service_1.BlacklistEraserService,
            blacklist_finder_service_1.BlacklistFinderService
        ]
    })
], BlackListModule);
exports.BlackListModule = BlackListModule;
//# sourceMappingURL=blacklist.module.js.map