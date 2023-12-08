import { FlowEntity } from '../entities/flow.entity';
import { NewFlowRequest } from '../requests/new-flow';
import { UpdateFlowRequest } from '../requests/update-flow';
import { CreateFlowService } from '../services/create-flow.service';
import { UpdateFlowService } from '../services/update-flow.service';
import { FlowEraserService } from '../services/flow-eraser.service';
import { FLowFinderService } from '../services/flow-finder.service';
export declare class FlowController {
    private createFlowService;
    private updateFlowService;
    private flowEraserService;
    private flowFinderService;
    constructor(createFlowService: CreateFlowService, updateFlowService: UpdateFlowService, flowEraserService: FlowEraserService, flowFinderService: FLowFinderService);
    create(createSourceRequest: NewFlowRequest): Promise<NewFlowRequest & FlowEntity>;
    update(id: string, upodateSourceRequest: UpdateFlowRequest): Promise<void>;
    getAll(): Promise<FlowEntity[]>;
    delete(id: string): Promise<void>;
}
