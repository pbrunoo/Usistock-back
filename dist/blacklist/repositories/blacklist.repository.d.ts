import { Repository } from 'typeorm';
import { BlackListEntity } from '../entities/blacklist.entity';
export declare class BlackListRepository extends Repository<BlackListEntity> {
    getAll(): Promise<BlackListEntity[]>;
}
