import { UnidadeRepository } from "src/unidade/respositories/unidade.repository";
export declare class ValidationControllersEraserService {
    private unidadeRepository;
    constructor(unidadeRepository: UnidadeRepository);
    erase(unidadeId: string, userCreated: string): Promise<void>;
}
