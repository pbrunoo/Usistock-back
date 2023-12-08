import { Repository } from 'typeorm';
import { AnalisysObjectEntity } from '../entities/analysis-object.entity';
import { AnalisysObjectFinderRequest } from '../requests/analisys-object-filter';
export declare class AnalisysObjectRepository extends Repository<AnalisysObjectEntity> {
    getAll(): Promise<AnalisysObjectEntity[]>;
    getAnalisysObcjectByFilter(filters: AnalisysObjectFinderRequest): Promise<AnalisysObjectEntity[]>;
    getAnalisysObcjectByStatus(flow: string, sla: number): Promise<AnalisysObjectEntity[]>;
    getAnalisysObcjectByFlow(flow: string, sla: number): Promise<AnalisysObjectEntity[]>;
    private createFilteredAnalisysObject;
}
