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
exports.ConsumoEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const validation_controllers_1 = require("./agreggate/validation-controllers");
let ConsumoEntity = class ConsumoEntity {
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
        const deleteValidationControllersIndex = this
            .validationControllers
            .findIndex(validationControllers => validationControllers.userCreated === userCreated);
        if (deleteValidationControllersIndex !== -1) {
            this.validationControllers.splice(deleteValidationControllersIndex, 1);
        }
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], ConsumoEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], ConsumoEntity.prototype, "produto", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], ConsumoEntity.prototype, "unidadeId", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], ConsumoEntity.prototype, "fornecedor", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], ConsumoEntity.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Date)
], ConsumoEntity.prototype, "deletedAt", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], ConsumoEntity.prototype, "deletedUserId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: [validation_controllers_1.ValidationControllers] }),
    typeorm_1.Column(),
    __metadata("design:type", Array)
], ConsumoEntity.prototype, "validationControllers", void 0);
ConsumoEntity = __decorate([
    typeorm_1.Entity()
], ConsumoEntity);
exports.ConsumoEntity = ConsumoEntity;
//# sourceMappingURL=consumo.entity.js.map