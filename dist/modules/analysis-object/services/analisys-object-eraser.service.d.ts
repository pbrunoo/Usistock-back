import { AnalisysObjectRepository } from "../repositories/analysis-object.repository";
export declare class AnalisysObjectEraserService {
    private analisysObjectlRepository;
    constructor(analisysObjectlRepository: AnalisysObjectRepository);
    delete(id: string): Promise<void>;
}
