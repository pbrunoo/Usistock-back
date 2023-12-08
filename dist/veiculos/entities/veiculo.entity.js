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
exports.VeiculoEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const validation_controllers_1 = require("./agreggate/validation-controllers");
let VeiculoEntity = class VeiculoEntity {
    addValidationControllers(validationControllers) {
        if (!this.validationControllers) {
            this.validationControllers = [validationControllers];
            return;
        }
        this.validationControllers.push(validationControllers);
    }
    deleteValidationControllers(userCreated) {
        if (!this.validationControllers) {
            return;
        }
        const deletedValidationControllerIndex = this
            .validationControllers
            .findIndex(validationController => validationController.userCreated === userCreated);
        if (deletedValidationControllerIndex !== -1) {
            this.validationControllers.splice(deletedValidationControllerIndex, 1);
        }
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], VeiculoEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], VeiculoEntity.prototype, "veiculo", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], VeiculoEntity.prototype, "placa", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], VeiculoEntity.prototype, "responsavel", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], VeiculoEntity.prototype, "unidadeId", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], VeiculoEntity.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Date)
], VeiculoEntity.prototype, "deletedAt", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], VeiculoEntity.prototype, "deletedUserId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: [validation_controllers_1.ValidationControllers] }),
    typeorm_1.Column(),
    __metadata("design:type", Array)
], VeiculoEntity.prototype, "validationControllers", void 0);
VeiculoEntity = __decorate([
    typeorm_1.Entity()
], VeiculoEntity);
exports.VeiculoEntity = VeiculoEntity;
//# sourceMappingURL=veiculo.entity.js.map