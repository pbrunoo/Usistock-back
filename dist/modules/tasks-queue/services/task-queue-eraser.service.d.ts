import { TaskQueueRepository } from "../repositories/task-queue.repository";
export declare class TaskQueueEraserService {
    private taskQueueRepository;
    constructor(taskQueueRepository: TaskQueueRepository);
    delete(id: string): Promise<void>;
}
