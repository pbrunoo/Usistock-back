import { ProfileEntity } from "../entities/profile.entity";
import { ProfileRepository } from "../repositories/profile.repository";
export declare class ProfileFinderService {
    private profileRepository;
    constructor(profileRepository: ProfileRepository);
    getAll(): Promise<ProfileEntity[]>;
    getByProfileName(profileName: string): Promise<ProfileEntity[]>;
}
