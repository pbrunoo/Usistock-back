import { FlowEntity } from "../entities/flow.entity";
import { FlowRepository } from "../repositories/flow.repository";
import { NewFlowRequest } from "../requests/new-flow";
export declare class CreateFlowService {
    private flowRepository;
    constructor(flowRepository: FlowRepository);
    create(newFlowRequest: NewFlowRequest): Promise<NewFlowRequest & FlowEntity>;
}
