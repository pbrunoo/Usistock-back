import { Repository } from 'typeorm';
import { SourcetEntity } from '../entities/source.entity';
export declare class SourceRepository extends Repository<SourcetEntity> {
    getAll(): Promise<SourcetEntity[]>;
}
