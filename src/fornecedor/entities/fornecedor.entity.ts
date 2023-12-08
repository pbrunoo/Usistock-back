import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Fornecedor } from './abstractions/fornecedor';
import { ValidationControllers } from './agreggate/validation-controllers';


@Entity()
export class FornecedorEntity implements Fornecedor {
    @ObjectIdColumn()
    @ApiProperty({ type: String })
    id: Fornecedor['id'];

    @Column()
    @ApiProperty({ type: String })
    cpfCnpj: Fornecedor['cpfCnpj'];

    @Column()
    @ApiProperty({ type: String })
    razaoSocial: Fornecedor['razaoSocial'];

    @Column()
    @ApiProperty({ type: String })
    telefone: Fornecedor['telefone'];

    @Column()
    @ApiProperty({ type: String })
    email: Fornecedor['email'];

    @Column()
    @ApiProperty({ type: String })
    responsavel: Fornecedor['responsavel'];

    @Column()
    @ApiProperty({ type: String })
    endereco: Fornecedor['endereco'];
    
    @Column()
    @ApiProperty({ type: String })
    unidadeId: Fornecedor['unidadeId'];

    @Column()
    @ApiProperty({ type: Number })
    status: Fornecedor['status'];

    @ApiProperty({ type: Date })
    deletedAt: Date;

    @ApiProperty({ type: String })
    deletedUserId: string;

    @ApiProperty({type: [ValidationControllers] })
    @Column()
    validationControllers: ValidationControllers[];

    addValidationControllers(validationControllers: ValidationControllers) {
        if(!this.validationControllers) {
            this.validationControllers = [validationControllers];
            return;
        }

        this.validationControllers.push(validationControllers);
    }

    deleteValidationControllers(userCreated: number) {
        if(!this.validationControllers) {
            return;
        }

        const deleteValidationControllersIndex = this
            .validationControllers
            .findIndex(validationController => validationController.userCreated === userCreated);
        
        if(deleteValidationControllersIndex !== -1) {
            this.validationControllers.splice(deleteValidationControllersIndex, 1);
        }
    } 

}