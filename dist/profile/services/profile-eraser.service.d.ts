import { ProfileRepository } from "../repositories/profile.repository";
export declare class ProfileEraserService {
    private profileRepository;
    constructor(profileRepository: ProfileRepository);
    delete(id: string): Promise<void>;
}
