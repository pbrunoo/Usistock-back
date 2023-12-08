import { Unidade } from './abstractions/unidade';
import { ValidationControllers } from './agreggate/validation-controllers';
export declare class UnidadeEntity implements Unidade {
    id: Unidade['id'];
    nomeUnidade: Unidade['nomeUnidade'];
    idEmpresa: Unidade['idEmpresa'];
    status: Unidade['status'];
    validationControllers: ValidationControllers[];
    deletedAt: Date;
    deletedUserId: string;
    addValidationControllers(validationControllers: ValidationControllers): void;
    deleteValidationControllers(userCreated: string): void;
}
