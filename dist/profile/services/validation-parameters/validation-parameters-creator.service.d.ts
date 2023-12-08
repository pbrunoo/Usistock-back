import { ProfileRepository } from 'src/profile/repositories/profile.repository';
import { NewValidationParametersRequest } from 'src/profile/requests/validation-parameters/new-validation-parameters.request';
export declare class ValidationParametersCreatorService {
    private profileRepository;
    constructor(profileRepository: ProfileRepository);
    create(profileId: string, newValidationParameters: NewValidationParametersRequest): Promise<import("../../entities/profile.entity").ProfileEntity>;
}
