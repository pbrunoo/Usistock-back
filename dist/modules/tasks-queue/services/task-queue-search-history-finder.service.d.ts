import { TaskQueueSearcHistory } from "../entities/aggregates/task-queue-search-history";
import { TaskQueueRepository } from "../repositories/task-queue.repository";
export declare class TaskQueueSearchHistoryFinderService {
    private taskQueueRepository;
    constructor(taskQueueRepository: TaskQueueRepository);
    getAll(taskQueueId: string, taskQueueSearchId: string): Promise<TaskQueueSearcHistory[]>;
}
