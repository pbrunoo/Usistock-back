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
exports.ProfileEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const validation_parameters_1 = require("./aggregates/validation-parameters");
let ProfileEntity = class ProfileEntity {
    addValidationParameters(validationParameters) {
        if (!this.validationParameters) {
            this.validationParameters = [validationParameters];
            return;
        }
        this.validationParameters.push(validationParameters);
    }
    deleteValidationParameters(customerMetaData) {
        if (!this.validationParameters) {
            return;
        }
        const deletedValidationParameterIndex = this
            .validationParameters
            .findIndex(validationParameter => validationParameter.customerMetaData === customerMetaData);
        if (deletedValidationParameterIndex !== -1) {
            this.validationParameters.splice(deletedValidationParameterIndex, 1);
        }
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], ProfileEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], ProfileEntity.prototype, "costumerId", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], ProfileEntity.prototype, "costumerName", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], ProfileEntity.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ type: [String] }),
    typeorm_1.Column(),
    __metadata("design:type", Array)
], ProfileEntity.prototype, "sources", void 0);
__decorate([
    swagger_1.ApiProperty({ type: [validation_parameters_1.ValidationParameters] }),
    typeorm_1.Column(),
    __metadata("design:type", Array)
], ProfileEntity.prototype, "validationParameters", void 0);
ProfileEntity = __decorate([
    typeorm_1.Entity()
], ProfileEntity);
exports.ProfileEntity = ProfileEntity;
//# sourceMappingURL=profile.entity.js.map