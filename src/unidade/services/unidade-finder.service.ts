import { Injectable } from "@nestjs/common";
import { EmpresaRepository } from "src/empresa/repositories/empresa.respository";
import { UnityEmpresa } from "../dto/unity-empresa.dto";
import { UnidadeRepository } from "../respositories/unidade.repository";



@Injectable()
export class UnidadeFinderService {
    constructor(
        private unidadeRepository: UnidadeRepository,
        private empresaRepository: EmpresaRepository
    ) {}

    async getAll() {
        const unidade = await this.unidadeRepository.getAll();
        return unidade;
    }

    async getByName(nomeUnidade: string) {
        const unidade = await this.unidadeRepository.find({
            nomeUnidade: nomeUnidade
        })
        return unidade;
    }

    async getByUnidadeId(id: string) {
        const unidade = await this.unidadeRepository.getUnidadeByUnidadeId(id);
		return unidade;

	}

    async getUnidadeEmpresa() {
        const unityEmpresa: UnityEmpresa[] = [];

        const unidadesEmpresa = await this.unidadeRepository.getAll();
        
        for(const unidadeEmpresa of unidadesEmpresa) { 
            const empresa = await this.empresaRepository.getEmpresa(unidadeEmpresa.idEmpresa);
           
            unityEmpresa.push({
                id: unidadeEmpresa.id,
                nomeUnidade: unidadeEmpresa.nomeUnidade,
                idEmpresa: unidadeEmpresa.idEmpresa,
                razaoSocial: empresa.razaoSocial,
                status: unidadeEmpresa.status
            });
        }
        
		return unityEmpresa;
	}

    async getById(id: string) {
        const unidade = await this.unidadeRepository.findOne(id);
		return unidade;
	}

    async searchAll(result: string) {
        const unityEmpresa: UnityEmpresa[] = [];
        const search = await this.unidadeRepository.findSearch(result);

        for(const unidadeEmpresa of search) { 
            const empresa = await this.empresaRepository.getEmpresa(unidadeEmpresa.idEmpresa);
           
            unityEmpresa.push({
                id: unidadeEmpresa.id,
                nomeUnidade: unidadeEmpresa.nomeUnidade,
                idEmpresa: unidadeEmpresa.idEmpresa,
                razaoSocial: empresa.razaoSocial,
                status: unidadeEmpresa.status
            });
        }
        return unityEmpresa
    }

}