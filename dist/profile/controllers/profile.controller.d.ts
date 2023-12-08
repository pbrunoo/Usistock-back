import { ProfileEntity } from '../entities/profile.entity';
import { NewProfileRequest } from '../requests/new-profile';
import { CreateProfileService } from '../services/create-profile.service';
import { UpdateProfileService } from '../services/update-profile.service';
import { ProfileEraserService } from '../services/profile-eraser.service';
import { ProfileFinderService } from '../services/profile-finder.service';
import { UpdateProfileRequest } from '../requests/update-profile';
export declare class ProfileController {
    private createProfileService;
    private updateProfileService;
    private profileEraserService;
    private profileFinderService;
    constructor(createProfileService: CreateProfileService, updateProfileService: UpdateProfileService, profileEraserService: ProfileEraserService, profileFinderService: ProfileFinderService);
    create(createSourceRequest: NewProfileRequest): Promise<NewProfileRequest & ProfileEntity>;
    update(id: string, upodateSourceRequest: UpdateProfileRequest): Promise<void>;
    getAll(): Promise<ProfileEntity[]>;
    getByCostumerName(profileName: string): Promise<ProfileEntity[]>;
    delete(id: string): Promise<void>;
}
