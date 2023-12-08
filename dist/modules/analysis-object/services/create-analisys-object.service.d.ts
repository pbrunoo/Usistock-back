import { AnalisysObjectRepository } from "../repositories/analysis-object.repository";
import { AnalisysObjectStatusEnum } from "../enum/analisys-object-status.enum";
import { AnalisysObjectStatusFileEnum } from "../enum/analisys-object-status-file.enum";
export declare class CreateAnalisysObjectService {
    private analisysObjectlRepository;
    constructor(analisysObjectlRepository: AnalisysObjectRepository);
    create(flowId: string, userId: string, fileName: string): Promise<{
        name: string;
        document: string;
        documentType: string;
        documentNumber: number;
        flowId: string;
        status: AnalisysObjectStatusEnum.emprocessamento;
        statusFile: AnalisysObjectStatusFileEnum.aprovado;
        batch: number;
        analisysObjectDetails: any;
        userId: string;
    } & import("../entities/analysis-object.entity").AnalisysObjectEntity>;
    private jsonValidateBoolean;
}
