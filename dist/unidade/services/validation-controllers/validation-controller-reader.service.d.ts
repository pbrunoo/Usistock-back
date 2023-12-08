import { UnidadeRepository } from "src/unidade/respositories/unidade.repository";
export declare class ValidationControllersReaderService {
    private unidadeRepository;
    constructor(unidadeRepository: UnidadeRepository);
    getAllValidationControllers(unidadeId: string): Promise<import("../../entities/agreggate/validation-controllers").ValidationControllers[]>;
}
