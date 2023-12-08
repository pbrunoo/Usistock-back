import { AnalisysObjectDetailsReaderService } from '../services/analisys-object-details/analisys-object-details-reader.service';
import { AnalisysObjectDetails } from '../entities/aggregates/analisys-object-details';
import { TaskQueueFinderService } from 'src/modules/tasks-queue/services/task-queue-finder.service';
export declare class AnalisysObjectDetailsController {
    private analisysObjectDetailsReaderService;
    private taskQueueFinderService;
    constructor(analisysObjectDetailsReaderService: AnalisysObjectDetailsReaderService, taskQueueFinderService: TaskQueueFinderService);
    getAll(id: string): Promise<AnalisysObjectDetails[]>;
    getById(id: string, detailId: string): Promise<AnalisysObjectDetails>;
    getManualTasks(id: string, detailId: string): Promise<import("../../tasks-queue/entities/task-queue.entity").TaskQueueEntity[]>;
    getAutoTasks(id: string, detailId: string): Promise<import("../../tasks-queue/entities/task-queue.entity").TaskQueueEntity[]>;
}
