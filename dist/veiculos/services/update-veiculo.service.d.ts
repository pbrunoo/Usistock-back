import { VeiculoRepository } from "../repositories/veiculo.repository";
import { UpdateVeiculoRequest } from "../requests/update-veiculo";
export declare class UpdateVeiculoService {
    private veiculoRepository;
    constructor(veiculoRepository: VeiculoRepository);
    update(clienteId: string, updateVeiculoRequest: UpdateVeiculoRequest): Promise<import("typeorm").UpdateResult>;
}
