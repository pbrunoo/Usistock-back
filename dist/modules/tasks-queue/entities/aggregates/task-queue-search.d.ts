import { ObjectID } from "mongodb";
import { TaskQueueSearcHistory } from "./task-queue-search-history";
export declare class TaskQueueSearch {
    id: ObjectID;
    sourceAddress: string;
    searchType: string;
    searchName: string;
    status: string;
    message: string;
    taskQueueSearcHistorys: TaskQueueSearcHistory[];
    constructor(taskQueueSearch?: Partial<TaskQueueSearch>);
}
