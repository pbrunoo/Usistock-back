import { FlowRepository } from "../repositories/flow.repository";
export declare class FlowEraserService {
    private blackListRepository;
    constructor(blackListRepository: FlowRepository);
    delete(id: string): Promise<void>;
}
