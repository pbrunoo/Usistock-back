import { ProfileRepository } from 'src/profile/repositories/profile.repository';
export declare class ValidationParametersEraserService {
    private profileRepository;
    constructor(profileRepository: ProfileRepository);
    erase(profileId: string, customerMetaData: string): Promise<void>;
}
