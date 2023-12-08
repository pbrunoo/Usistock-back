import { TaskQueueRepository } from "../repositories/task-queue.repository";
export declare class TaskQueueFinderService {
    private taskQueueRepository;
    constructor(taskQueueRepository: TaskQueueRepository);
    getAll(): Promise<import("../entities/task-queue.entity").TaskQueueEntity[]>;
    getByAnalisysObjectManual(analisysObjectId: string): Promise<import("../entities/task-queue.entity").TaskQueueEntity[]>;
    getByAnalisysObjectAuto(analisysObjectId: string): Promise<import("../entities/task-queue.entity").TaskQueueEntity[]>;
}
