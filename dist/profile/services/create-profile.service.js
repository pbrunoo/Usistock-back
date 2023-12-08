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
exports.CreateProfileService = void 0;
const common_1 = require("@nestjs/common");
const profile_repository_1 = require("../repositories/profile.repository");
let CreateProfileService = class CreateProfileService {
    constructor(profiletRepository) {
        this.profiletRepository = profiletRepository;
    }
    async create(newProfileRequest) {
        try {
            const source = await this.profiletRepository.find({
                where: {
                    costumerId: newProfileRequest.costumerId,
                    name: newProfileRequest.name
                }
            });
            if (source.length > 0) {
                throw new common_1.BadRequestException(`This profile name already exists for this costumer.`);
            }
            return this.profiletRepository.save(newProfileRequest);
        }
        catch (e) {
            let errorMessage = e.message;
            if ((e === null || e === void 0 ? void 0 : e.code) === 11000)
                errorMessage = "Duplicated Index";
            throw new common_1.BadRequestException(errorMessage);
        }
    }
};
CreateProfileService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [profile_repository_1.ProfileRepository])
], CreateProfileService);
exports.CreateProfileService = CreateProfileService;
//# sourceMappingURL=create-profile.service.js.map