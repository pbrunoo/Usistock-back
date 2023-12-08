import { FlowRepository } from "../repositories/flow.repository";
export declare class FLowFinderService {
    private flowRepository;
    constructor(flowRepository: FlowRepository);
    getAll(): Promise<import("../entities/flow.entity").FlowEntity[]>;
    getByCostumerName(costumerName: string): Promise<import("../entities/flow.entity").FlowEntity[]>;
}
