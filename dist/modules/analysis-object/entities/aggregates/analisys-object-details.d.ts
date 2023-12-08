import { AnalisysObjectStatusEnum } from '../../enum/analisys-object-status.enum';
import { ObjectID } from "mongodb";
export declare class AnalisysObjectDetails {
    id: ObjectID;
    toolsDriver: string;
    cityName: string;
    cpf: string;
    bithDate: string;
    fullName: string;
    rgNumber: string;
    fatherName: string;
    motherName: string;
    phoneNumber: string;
    status: AnalisysObjectStatusEnum;
    constructor(analisysObjectDetails: AnalisysObjectDetails);
}
