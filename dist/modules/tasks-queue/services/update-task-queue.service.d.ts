import { TaskQueueRepository } from "../repositories/task-queue.repository";
export declare class UpdateTaskQueueService {
    private blacklistRepository;
    constructor(blacklistRepository: TaskQueueRepository);
    update(taskId: string, status: string): Promise<void>;
}
