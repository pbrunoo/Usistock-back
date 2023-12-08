import { Profile } from './abstractions/profile';
import { ValidationParameters } from './aggregates/validation-parameters';
export declare class ProfileEntity implements Profile {
    id: Profile['id'];
    costumerId: Profile['costumerId'];
    costumerName: Profile['costumerName'];
    name: Profile['name'];
    sources: string[];
    validationParameters: ValidationParameters[];
    addValidationParameters(validationParameters: ValidationParameters): void;
    deleteValidationParameters(customerMetaData: string): void;
}
