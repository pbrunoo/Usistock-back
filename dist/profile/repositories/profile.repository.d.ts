import { Repository } from 'typeorm';
import { ProfileEntity } from '../entities/profile.entity';
export declare class ProfileRepository extends Repository<ProfileEntity> {
    getAll(): Promise<ProfileEntity[]>;
}
