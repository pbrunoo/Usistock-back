import { AnalisysObjectEntity } from "../entities/analysis-object.entity";
import { AnalisysObjectRepository } from "../repositories/analysis-object.repository";
export declare class UpdateAnalisysObjectService {
    private analisysObjectlRepository;
    constructor(analisysObjectlRepository: AnalisysObjectRepository);
    updateStatus(id: string): Promise<AnalisysObjectEntity>;
    updateUser(id: string, userId: string): Promise<AnalisysObjectEntity>;
    updateFlow(id: string, flowId: string): Promise<AnalisysObjectEntity>;
}
