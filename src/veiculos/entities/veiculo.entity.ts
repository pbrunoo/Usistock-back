import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ObjectIdColumn } from "typeorm";
import { Veiculo } from "./abstractions/veiculo";
import { ValidationControllers } from "./agreggate/validation-controllers";


@Entity()
export class VeiculoEntity implements Veiculo {
   
    @ObjectIdColumn()
    @ApiProperty({type: String})
    id: Veiculo['id'];

    @Column()
    @ApiProperty({type: String})
    veiculo: Veiculo['veiculo'];

    @Column()
    @ApiProperty({type: String})
    placa: Veiculo['placa'];

    @Column()
    @ApiProperty({type: String})
    responsavel: Veiculo['responsavel'];

    @Column()
    @ApiProperty({type: String})
    unidadeId: Veiculo['unidadeId'];

    @Column()
    @ApiProperty({type: Number})
    status: Veiculo['status'];

    @ApiProperty({ type: Date })
    deletedAt: Date;

    @ApiProperty({ type: String })
    deletedUserId: string;

    @ApiProperty({ type: [ValidationControllers] })
    @Column()
    validationControllers: ValidationControllers[];

    addValidationControllers(validationControllers: ValidationControllers) {
        if(!this.validationControllers) {
            this.validationControllers = [validationControllers];
            return;
        }

        this.validationControllers.push(validationControllers);
    }

    deleteValidationControllers(userCreated: string) {
        if (!this.validationControllers) {
            return;
        }

        const deletedValidationControllerIndex = this
            .validationControllers
            .findIndex(validationController => validationController.userCreated === userCreated);

        if(deletedValidationControllerIndex !== -1) {
            this.validationControllers.splice(deletedValidationControllerIndex, 1);
        }
    }
}