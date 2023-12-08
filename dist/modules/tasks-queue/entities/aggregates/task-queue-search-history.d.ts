import { ObjectId } from "mongodb";
export declare class TaskQueueSearcHistory {
    id: ObjectId;
    taskDate: Date;
    userId: string;
    status: string;
    description: string;
    constructor(taskQueueSearchHistory: any);
}
