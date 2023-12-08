import { SourcetEntity } from "../entities/source.entity";
import { SourceRepository } from "../repositories/source.repository";
export declare class SourceFinderService {
    private sourceRepository;
    constructor(sourceRepository: SourceRepository);
    getAll(): Promise<SourcetEntity[]>;
    getByCostumerName(sourceName: string): Promise<SourcetEntity[]>;
}
