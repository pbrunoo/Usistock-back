import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Consumo } from './abstractions/consumo';
import { ValidationControllers } from './agreggate/validation-controllers'

@Entity()
export class ConsumoEntity implements Consumo {
    @ObjectIdColumn()
    @ApiProperty({ type: String })
    id: Consumo['id'];

    @Column()
    @ApiProperty({ type: String })
    produto: Consumo['produto'];

    @Column()
    @ApiProperty({ type: String })
    unidadeId: Consumo['unidadeId'];

    @Column()
    @ApiProperty({ type: String })
    fornecedor: Consumo['fornecedor'];

    @Column()
    @ApiProperty({ type: Number })
    status: Consumo['status'];

    @ApiProperty({ type: Date })
    deletedAt: Date;

    @ApiProperty({ type: String })
    deletedUserId: string;

    @ApiProperty({ type: [ValidationControllers] })
    @Column()
    validationControllers: ValidationControllers[];

    addValidationControllers(validationControllers: ValidationControllers) {
        if(!this.validationControllers) {
            this.validationControllers = [ validationControllers];
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
            .findIndex(validationControllers => validationControllers.userCreated === userCreated);

        if(deleteValidationControllersIndex !== -1) {
            this.validationControllers.splice(deleteValidationControllersIndex,1);
        }
        
    }

}