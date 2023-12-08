import { ValidationParameters } from 'src/profile/entities/aggregates/validation-parameters';
import { ProfileRepository } from 'src/profile/repositories/profile.repository';
export declare class ValidationParametersReaderService {
    private profileRepository;
    constructor(profileRepository: ProfileRepository);
    getAllValidationParameters(profileId: string): Promise<ValidationParameters[]>;
}
