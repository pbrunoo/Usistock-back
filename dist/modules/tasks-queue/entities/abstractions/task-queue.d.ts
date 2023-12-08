export interface TaskQueue {
    id?: string;
    analisysObjectId: string;
    taskDate: Date;
    batch: number;
    flowId: string;
    result: string;
}
