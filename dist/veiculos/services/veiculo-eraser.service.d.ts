import { VeiculoRepository } from "../repositories/veiculo.repository";
export declare class VeiculoEraserService {
    private veiculoRepository;
    constructor(veiculoRepository: VeiculoRepository);
    delete(id: string, userId: string): Promise<void>;
}
