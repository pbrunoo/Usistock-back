import { Injectable } from "@nestjs/common";
import { EmpresaRepository } from "../repositories/empresa.respository";


@Injectable()
export class EmpresaFinderService {
    constructor(
        private empresaRepository: EmpresaRepository
    ) {}

    async getAll() {
        const empresa = await this.empresaRepository.getAll();
        console.log(empresa)
        return empresa;
    }

    async getByName(razaoSocial: string) {
        const empresas = await this.empresaRepository.find({
            razaoSocial: razaoSocial
        })
        return razaoSocial;
    }

    async getById(id: string) {
        const empresa = await this.empresaRepository.findOne(id);
        return empresa;
    }

    async searchAllEmpresa(result: string) {
        const search = await this.empresaRepository.findSearch(result);
        return search;
    }
   
}