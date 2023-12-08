import { TaskQueueRepository } from "../repositories/task-queue.repository";
import { NewTaskQueueSearchHistoryRequest } from "../requests/new-task-queue-search-history";
export declare class CreateTaskQueueSearchHistoryService {
    private taskQueueRepository;
    constructor(taskQueueRepository: TaskQueueRepository);
    create(taskQueueId: string, taskQueueSearchId: string, newTaskQueueSearchHistoryRequest: NewTaskQueueSearchHistoryRequest): Promise<import("../entities/task-queue.entity").TaskQueueEntity>;
}
