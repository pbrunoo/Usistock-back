import { TaskQueueSearcHistory } from "../entities/aggregates/task-queue-search-history";
export declare class NewTaskQueueSearchHistoryRequest {
    userId: TaskQueueSearcHistory['userId'];
    status: TaskQueueSearcHistory['status'];
    description: TaskQueueSearcHistory['description'];
}
