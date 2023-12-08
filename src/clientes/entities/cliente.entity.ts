import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Cliente } from './abstractions/cliente';
import { ObjectId } from 'mongodb';
import { ValidationParameters } from './agreggate/validation-parameters'


@Entity()
export class ClienteEntity implements Cliente {
    @ObjectIdColumn()
    @ApiProperty({type: String})
    id: Cliente['id'];

    @Column()
    @ApiProperty({type: String})
    cpfCnpj: Cliente['cpfCnpj'];

    @Column()
    @ApiProperty({type: Number})
    inscEstadual: Cliente['inscEstadual'];

    @Column()
    @ApiProperty({type: String})
    razaoSocial: Cliente['razaoSocial'];

    @Column()
    @ApiProperty({type: String})
    nomeFantasia: Cliente['nomeFantasia'];

    @Column()
    @ApiProperty({type: String})
    cep: Cliente['cep'];

    @Column()
    @ApiProperty({type: String})
    endereco: Cliente['endereco'];

    @Column()
    @ApiProperty({type: String})
    complemento: Cliente['complemento'];

    @Column()
    @ApiProperty({type: Number})
    numero: Cliente['numero'];

    @Column()
    @ApiProperty({type: String})
    bairro: Cliente['bairro'];

    @Column()
    @ApiProperty({type: String})
    cidade: Cliente['cidade'];

    @Column()
    @ApiProperty({type: String})
    uf: Cliente['uf'];

    @Column()
    @ApiProperty({type: String})
    telefone: Cliente['telefone'];

    @Column()
    @ApiProperty({type: String})
    email: Cliente['email'];

    @Column()
    @ApiProperty({type: String})
    unidadeId: Cliente['unidadeId'];

    @Column()
    @ApiProperty({type: Number})
    status: Cliente['status'];

    @ApiProperty({ type: Date })
    deletedAt: Date;

    @ApiProperty({ type: String })
    deletedUserId: string;

    @ApiProperty({ type: [ValidationParameters] })
    @Column()
    validationParameters: ValidationParameters[];

    addValidationParameters(validationParameters: ValidationParameters) {
        if(!this.validationParameters) {
            this.validationParameters = [validationParameters];
            return;
        }

        this.validationParameters.push(validationParameters);
    }

    deleteValidationParameters(userCreated: string) {
        if (!this.validationParameters) {
            return;
        }

        const deletedValidationParameterIndex = this
            .validationParameters
            .findIndex(validationParameter => validationParameter.userCreated === userCreated);

        if(deletedValidationParameterIndex !== -1) {
            this.validationParameters.splice(deletedValidationParameterIndex, 1);
        }
    }

}
