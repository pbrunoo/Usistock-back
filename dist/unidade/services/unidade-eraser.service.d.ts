import { UnidadeRepository } from "../respositories/unidade.repository";
export declare class UnidadeEraserService {
    private unidadeRepository;
    constructor(unidadeRepository: UnidadeRepository);
    delete(id: string, userId: string): Promise<void>;
}
