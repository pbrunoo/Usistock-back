import { TaskQueueEntity } from '../entities/task-queue.entity';
import { NewTaskQueueRequest } from '../requests/new-task-queue';
import { CreateTaskQueueService } from '../services/create-task-queue.service';
import { UpdateTaskQueueService } from '../services/update-task-queue.service';
import { TaskQueueEraserService } from '../services/task-queue-eraser.service';
import { TaskQueueFinderService } from '../services/task-queue-finder.service';
import { TaskQueueSearcHistory } from '../entities/aggregates/task-queue-search-history';
import { CreateTaskQueueSearchHistoryService } from '../services/create-task-queue-search-history.service';
import { NewTaskQueueSearchHistoryRequest } from '../requests/new-task-queue-search-history';
import { TaskQueueSearchHistoryFinderService } from '../services/task-queue-search-history-finder.service';
export declare class TaskQueueController {
    private createTaskQueueService;
    private updateTaskQueueService;
    private taskQueueFinderService;
    private taskQueueEraserService;
    private createTaskQueueSearchHistoryService;
    private taskQueueSearchHistoryFinderService;
    constructor(createTaskQueueService: CreateTaskQueueService, updateTaskQueueService: UpdateTaskQueueService, taskQueueFinderService: TaskQueueFinderService, taskQueueEraserService: TaskQueueEraserService, createTaskQueueSearchHistoryService: CreateTaskQueueSearchHistoryService, taskQueueSearchHistoryFinderService: TaskQueueSearchHistoryFinderService);
    create(createTaskQueueRequest: NewTaskQueueRequest): Promise<TaskQueueEntity>;
    createTaskQUeueSearchHistory(taskQueueId: string, taskQueueSearchId: string, createTaskQueueSearchHistoryRequest: NewTaskQueueSearchHistoryRequest): Promise<TaskQueueEntity>;
    getAllTaskQueueSearchHistorys(taskQueueId: string, taskQueueSearchId: string): Promise<TaskQueueSearcHistory[]>;
    update(id: string, upodateBlacklistRequest: UpdateTaskQueueService): Promise<void>;
    getAll(): Promise<TaskQueueEntity[]>;
    getByAnalisysObject(analisysobjectid: string): Promise<TaskQueueEntity[]>;
    delete(id: string): Promise<void>;
}
