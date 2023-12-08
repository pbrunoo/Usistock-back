import { ProfileEntity } from "../entities/profile.entity";
import { ProfileRepository } from "../repositories/profile.repository";
import { NewProfileRequest } from "../requests/new-profile";
export declare class CreateProfileService {
    private profiletRepository;
    constructor(profiletRepository: ProfileRepository);
    create(newProfileRequest: NewProfileRequest): Promise<NewProfileRequest & ProfileEntity>;
}
