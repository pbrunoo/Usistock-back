import { FlowRepository } from "../repositories/flow.repository";
import { UpdateFlowRequest } from "../requests/update-flow";
export declare class UpdateFlowService {
    private blacklistRepository;
    constructor(blacklistRepository: FlowRepository);
    update(costumerId: string, updateFlowRequest: UpdateFlowRequest): Promise<import("typeorm").UpdateResult>;
}
