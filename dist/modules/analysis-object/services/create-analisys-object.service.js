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
exports.CreateAnalisysObjectService = void 0;
const common_1 = require("@nestjs/common");
const analysis_object_repository_1 = require("../repositories/analysis-object.repository");
const analisys_object_status_enum_1 = require("../enum/analisys-object-status.enum");
const analisys_object_details_status_enum_1 = require("../enum/analisys-object-details-status.enum");
const analisys_object_status_file_enum_1 = require("../enum/analisys-object-status-file.enum");
const bson_1 = require("bson");
var fs = require('fs');
var xlsx = require('xlsx');
let CreateAnalisysObjectService = class CreateAnalisysObjectService {
    constructor(analisysObjectlRepository) {
        this.analisysObjectlRepository = analisysObjectlRepository;
    }
    async create(flowId, userId, fileName) {
        try {
            const tempFile = await fs.readFileSync('./files/' + fileName);
            const workbook = xlsx.read(tempFile, { type: 'buffer' });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const sheetObj = xlsx.utils.sheet_to_json(worksheet, { raw: false });
            this.jsonValidateBoolean(sheetObj);
            let random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
            let documentNumber = Math.floor(Math.random() * (99999999999 - 10000000000)) + 10000000000;
            const analisysObjectDetailsDto = sheetObj.map((item) => {
                return Object.assign(Object.assign({ id: new bson_1.ObjectID() }, item), { status: analisys_object_details_status_enum_1.AnalisysObjectDetailsStatusEnum.aceito });
            });
            const analisysObject = await this.analisysObjectlRepository.save({
                name: fileName.split('.')[0],
                document: fileName,
                documentType: fileName.split('.')[1],
                documentNumber: documentNumber,
                flowId: flowId,
                status: analisys_object_status_enum_1.AnalisysObjectStatusEnum.emprocessamento,
                statusFile: analisys_object_status_file_enum_1.AnalisysObjectStatusFileEnum.aprovado,
                batch: random,
                analisysObjectDetails: analisysObjectDetailsDto,
                userId: userId
            });
            return analisysObject;
        }
        catch (e) {
            let errorMessage = e.message;
            if ((e === null || e === void 0 ? void 0 : e.code) === 11000)
                errorMessage = "Duplicated Index";
            throw new common_1.BadRequestException(errorMessage);
        }
    }
    async jsonValidateBoolean(obj) {
        let key;
        let has = Object.prototype.hasOwnProperty.bind(obj);
        let map = Object.create(null);
        map['true'] = true;
        map['false'] = false;
        for (key in obj) {
            if (has(key)) {
                switch (typeof obj[key]) {
                    case 'object':
                        this.jsonValidateBoolean(obj[key]);
                        break;
                    case 'string':
                        if (obj[key].toLowerCase() in map) {
                            obj[key] = map[obj[key].toLowerCase()];
                        }
                }
            }
        }
    }
};
CreateAnalisysObjectService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [analysis_object_repository_1.AnalisysObjectRepository])
], CreateAnalisysObjectService);
exports.CreateAnalisysObjectService = CreateAnalisysObjectService;
//# sourceMappingURL=create-analisys-object.service.js.map