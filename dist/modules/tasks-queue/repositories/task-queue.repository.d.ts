import { Repository } from 'typeorm';
import { TaskQueueEntity } from '../entities/task-queue.entity';
export declare class TaskQueueRepository extends Repository<TaskQueueEntity> {
    getAll(): Promise<TaskQueueEntity[]>;
}
