import { Veiculo } from "./abstractions/veiculo";
import { ValidationControllers } from "./agreggate/validation-controllers";
export declare class VeiculoEntity implements Veiculo {
    id: Veiculo['id'];
    veiculo: Veiculo['veiculo'];
    placa: Veiculo['placa'];
    responsavel: Veiculo['responsavel'];
    unidadeId: Veiculo['unidadeId'];
    status: Veiculo['status'];
    deletedAt: Date;
    deletedUserId: string;
    validationControllers: ValidationControllers[];
    addValidationControllers(validationControllers: ValidationControllers): void;
    deleteValidationControllers(userCreated: string): void;
}
