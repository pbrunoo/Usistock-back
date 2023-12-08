import { Fornecedor } from './abstractions/fornecedor';
import { ValidationControllers } from './agreggate/validation-controllers';
export declare class FornecedorEntity implements Fornecedor {
    id: Fornecedor['id'];
    cpfCnpj: Fornecedor['cpfCnpj'];
    razaoSocial: Fornecedor['razaoSocial'];
    telefone: Fornecedor['telefone'];
    email: Fornecedor['email'];
    responsavel: Fornecedor['responsavel'];
    endereco: Fornecedor['endereco'];
    unidadeId: Fornecedor['unidadeId'];
    status: Fornecedor['status'];
    deletedAt: Date;
    deletedUserId: string;
    validationControllers: ValidationControllers[];
    addValidationControllers(validationControllers: ValidationControllers): void;
    deleteValidationControllers(userCreated: number): void;
}
