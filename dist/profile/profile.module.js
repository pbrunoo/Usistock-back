"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const profile_repository_1 = require("./repositories/profile.repository");
const profile_controller_1 = require("./controllers/profile.controller");
const create_profile_service_1 = require("./services/create-profile.service");
const update_profile_service_1 = require("./services/update-profile.service");
const profile_eraser_service_1 = require("./services/profile-eraser.service");
const profile_finder_service_1 = require("./services/profile-finder.service");
const validation_parameters_controller_1 = require("./controllers/validation-parameters.controller");
const validation_parameters_creator_service_1 = require("./services/validation-parameters/validation-parameters-creator.service");
const validation_parameters_reader_service_1 = require("./services/validation-parameters/validation-parameters-reader.service");
const validation_parameters_eraser_service_1 = require("./services/validation-parameters/validation-parameters-eraser.service");
let ProfileModule = class ProfileModule {
};
ProfileModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                profile_repository_1.ProfileRepository,
            ])
        ],
        controllers: [
            profile_controller_1.ProfileController,
            validation_parameters_controller_1.ValidationParametersController
        ],
        providers: [
            create_profile_service_1.CreateProfileService,
            update_profile_service_1.UpdateProfileService,
            profile_eraser_service_1.ProfileEraserService,
            profile_finder_service_1.ProfileFinderService,
            validation_parameters_creator_service_1.ValidationParametersCreatorService,
            validation_parameters_reader_service_1.ValidationParametersReaderService,
            validation_parameters_eraser_service_1.ValidationParametersEraserService
        ]
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;
//# sourceMappingURL=profile.module.js.map