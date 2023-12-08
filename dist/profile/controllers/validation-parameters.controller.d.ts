import { ValidationParametersReaderService } from '../services/validation-parameters/validation-parameters-reader.service';
import { ValidationParametersCreatorService } from '../services/validation-parameters/validation-parameters-creator.service';
import { ValidationParametersEraserService } from '../services/validation-parameters/validation-parameters-eraser.service';
import { ValidationParameters } from '../entities/aggregates/validation-parameters';
import { NewValidationParametersRequest } from '../requests/validation-parameters/new-validation-parameters.request';
export declare class ValidationParametersController {
    private validationParametersCreatorService;
    private validationParametersReaderService;
    private validationParametersEraserService;
    constructor(validationParametersCreatorService: ValidationParametersCreatorService, validationParametersReaderService: ValidationParametersReaderService, validationParametersEraserService: ValidationParametersEraserService);
    getAll(profileId: string): Promise<ValidationParameters[]>;
    create(profileId: string, newValidationParametersRequest: NewValidationParametersRequest): Promise<import("../entities/profile.entity").ProfileEntity>;
    erase(profileId: string, customerMetaData: string): Promise<void>;
}
