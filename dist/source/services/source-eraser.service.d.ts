import { SourceRepository } from "../repositories/source.repository";
export declare class SourceEraserService {
    private sourceRepository;
    constructor(sourceRepository: SourceRepository);
    delete(id: string): Promise<void>;
}
