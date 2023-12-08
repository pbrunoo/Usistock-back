import { Injectable } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { FornecedorRepository } from "src/fornecedor/repositories/fornecedor.repository";
import { UnityConsumo } from "../dto/unity-consumo.dto";
import { ConsumoRepository } from "../repositories/consumo.repository";

@Injectable()
export class ConsumoFinderService {
    constructor(
        private consumoRepository: ConsumoRepository,
        private fornecedorRepository: FornecedorRepository
    ) {}

    async getAll() {
        const consumo = await this.consumoRepository.getAll();
        return consumo;
    }

    async getByName(produto: string) {
        const consumo = await this.consumoRepository.find({
            produto: produto
        })
        return produto;
    }

    async getById(id: string) {
        const consumo = await this.consumoRepository.findOne(id);
        return consumo;
    }

    async getByUnidadeId(id: string) {
        const consumo = await this.consumoRepository.getConsumoByUnidadeId(id);
		return consumo;

	}

    async searchAll(search: string, unidadeId: string) {
        const result = await this.consumoRepository.searchFind(search, unidadeId);
        return result;
    }

    async getFornecedor(unidadeId: string) {
        const unityFornecedor: UnityConsumo[] =[];
        const consumosFornecedor = await this.consumoRepository.getConsumoByUnidadeId(unidadeId);
        
        for(const consumoFornecedor of consumosFornecedor) {
            const fornecedor = await this.fornecedorRepository.getFornecedor(consumoFornecedor.fornecedor);
           
            unityFornecedor.push({
                id: consumoFornecedor.id,
                produto: consumoFornecedor.produto,
                fornecedor: consumoFornecedor.fornecedor,
                nomeEmpresa: fornecedor.razaoSocial,
                telefone: fornecedor.telefone,
                status: consumoFornecedor.fornecedor
            });

            console.log(unityFornecedor)
        }
        return unityFornecedor;
    }
}