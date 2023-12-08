import { TaskQueue } from "../entities/abstractions/task-queue";
import { TaskQueueSearch } from "../entities/aggregates/task-queue-search";
export declare class NewTaskQueueRequest {
    analisysObjectId: TaskQueue['analisysObjectId'];
    batch: TaskQueue['batch'];
    flowId: TaskQueue['flowId'];
    result: TaskQueue['result'];
    taskQueueSearch: TaskQueueSearch[];
}
