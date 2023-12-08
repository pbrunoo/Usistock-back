import { TaskQueue } from './abstractions/task-queue';
import { TaskQueueSearch } from './aggregates/task-queue-search';
import { TaskQueueSearcHistory } from './aggregates/task-queue-search-history';
export declare class TaskQueueEntity implements TaskQueue {
    id: TaskQueue['id'];
    taskDate: TaskQueue['taskDate'];
    analisysObjectId: TaskQueue['analisysObjectId'];
    batch: TaskQueue['batch'];
    flowId: TaskQueue['flowId'];
    result: TaskQueue['result'];
    taskQueueSearch: TaskQueueSearch[];
    addTaskQueueHistory(taskQueueSearchId: string, taskQueueHistory: TaskQueueSearcHistory): void;
    getByTaskSearchId(taskQueueSearchId: string): TaskQueueSearch;
}
