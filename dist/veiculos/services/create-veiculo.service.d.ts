import { VeiculoRepository } from "../repositories/veiculo.repository";
import { NewVeiculoRequest } from "../requests/new-veiculo";
export declare class CreateVeiculoService {
    private veiculoRepository;
    constructor(veiculoRepository: VeiculoRepository);
    create(newVeiculoRequest: NewVeiculoRequest): Promise<NewVeiculoRequest & import("../entities/veiculo.entity").VeiculoEntity>;
}
