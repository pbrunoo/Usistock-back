import { ProfileRepository } from "../repositories/profile.repository";
import { UpdateProfileRequest } from "../requests/update-profile";
export declare class UpdateProfileService {
    private profileRepository;
    constructor(profileRepository: ProfileRepository);
    update(costumerId: string, updateProfileRequest: UpdateProfileRequest): Promise<import("typeorm").UpdateResult>;
}
