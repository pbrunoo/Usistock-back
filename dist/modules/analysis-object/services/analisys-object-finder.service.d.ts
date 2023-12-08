import { FlowRepository } from "src/flow/repositories/flow.repository";
import { AnalisysObjectResumed } from "../dto/analisys-object-resumed";
import { AnalisysObjectRepository } from "../repositories/analysis-object.repository";
import { AnalisysObjectFinderRequest } from "../requests/analisys-object-filter";
export declare class AnalisysObjectFinderService {
    private analisysObjectlRepository;
    private flowRepository;
    constructor(analisysObjectlRepository: AnalisysObjectRepository, flowRepository: FlowRepository);
    getAll(): Promise<import("../entities/analysis-object.entity").AnalisysObjectEntity[]>;
    getById(id: string): Promise<AnalisysObjectResumed>;
    getByFilter(analisysObjectFinderRequest: AnalisysObjectFinderRequest): Promise<import("../entities/analysis-object.entity").AnalisysObjectEntity[]>;
}
