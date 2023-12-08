import { TaskQueueEntity } from "../entities/task-queue.entity";
import { TaskQueueRepository } from "../repositories/task-queue.repository";
import { NewTaskQueueRequest } from "../requests/new-task-queue";
export declare class CreateTaskQueueService {
    private taskQueueRepository;
    constructor(taskQueueRepository: TaskQueueRepository);
    create(newTaskQueueRequest: NewTaskQueueRequest): Promise<TaskQueueEntity>;
}
