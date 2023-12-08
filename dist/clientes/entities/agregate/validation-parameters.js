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
exports.ValidationParameters = void 0;
const swagger_1 = require("@nestjs/swagger");
class ValidationParameters {
    constructor(validationParameters) {
        this.userCreated = validationParameters.userCreated;
        this.userUpdated = validationParameters.userUpdated;
        this.createdAt = validationParameters.createdAt;
        this.updateAt = validationParameters.updateAt;
    }
}
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Number)
], ValidationParameters.prototype, "userCreated", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Number)
], ValidationParameters.prototype, "userUpdated", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Date)
], ValidationParameters.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Date)
], ValidationParameters.prototype, "updateAt", void 0);
exports.ValidationParameters = ValidationParameters;
//# sourceMappingURL=validation-parameters.js.map