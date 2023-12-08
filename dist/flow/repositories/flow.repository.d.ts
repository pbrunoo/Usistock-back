import { Repository } from 'typeorm';
import { FlowEntity } from '../entities/flow.entity';
export declare class FlowRepository extends Repository<FlowEntity> {
    getAll(): Promise<FlowEntity[]>;
}
