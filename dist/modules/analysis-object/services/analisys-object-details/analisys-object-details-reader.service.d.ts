import { AnalisysObjectDetails } from '../../entities/aggregates/analisys-object-details';
import { AnalisysObjectRepository } from '../../repositories/analysis-object.repository';
export declare class AnalisysObjectDetailsReaderService {
    private analisysObjectRepository;
    constructor(analisysObjectRepository: AnalisysObjectRepository);
    getAll(id: string): Promise<AnalisysObjectDetails[]>;
    getById(id: string, analisysObjectDetailId: string): Promise<AnalisysObjectDetails>;
}
