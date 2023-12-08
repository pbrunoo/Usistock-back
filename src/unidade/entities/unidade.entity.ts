import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Unidade } from './abstractions/unidade';
import { ValidationControllers } from './agreggate/validation-controllers';


@Entity()
export class UnidadeEntity implements Unidade {
    @ObjectIdColumn()
    @ApiProperty({ type: String })
    id: Unidade['id'];

    @Column()
    @ApiProperty({ type: String })
    nomeUnidade: Unidade['nomeUnidade'];

    @Column()
    @ApiProperty({ type: String })
    idEmpresa: Unidade['idEmpresa'];

    @Column()
    @ApiProperty({ type: String })
    status: Unidade['status'];


    @ApiProperty({type: [ValidationControllers] })
    @Column()
    validationControllers: ValidationControllers[];

    @ApiProperty({ type: Date })
    deletedAt: Date;

    @ApiProperty({ type: String })
    deletedUserId: string;

    addValidationControllers(validationControllers: ValidationControllers) {
        if(!this.validationControllers) {
            this.validationControllers = [validationControllers];
            return;
        }

        this.validationControllers.push(validationControllers);
    }

    deleteValidationControllers(userCreated: string) {
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
