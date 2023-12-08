import { Consumo } from './abstractions/consumo';
import { ValidationControllers } from './agreggate/validation-controllers';
export declare class ConsumoEntity implements Consumo {
    id: Consumo['id'];
    produto: Consumo['produto'];
    unidadeId: Consumo['unidadeId'];
    fornecedor: Consumo['fornecedor'];
    status: Consumo['status'];
    deletedAt: Date;
    deletedUserId: string;
    validationControllers: ValidationControllers[];
    addValidationControllers(validationControllers: ValidationControllers): void;
    deleteValidationControllers(userCreated: number): void;
}
