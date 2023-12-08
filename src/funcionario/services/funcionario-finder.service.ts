import { EmpresaRepository } from 'src/empresa/repositories/empresa.respository';
import { UnityFuncionarioEmpresa } from './../dto/unity-empresa.dto';
import { Get, HttpCode, HttpStatus, Injectable, Param } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { FuncionarioRepository } from "../repositories/funcionario.repository";

@Injectable()
export class FuncionarioFinderService {
    constructor(
        private funcionarioRepository: FuncionarioRepository,
        private empresaRepository: EmpresaRepository
    ) { }

    async getAll() {
        const funcionario = await this.funcionarioRepository.getAll();
        return funcionario;
    }

    async getByName(nomeCompleto: string) {
        const funcionario = await this.funcionarioRepository.find({
            nomeCompleto: nomeCompleto
        });
        return funcionario;
    }

    async getById(id: string) {
        const funcionario = await this.funcionarioRepository.findOne(id);
        return funcionario;
    }

    async getByUnidadeId(id: string) {
        const funcionario = await this.funcionarioRepository.getFuncionarioByUnidadeId(id);
		return funcionario;

	}

    @Get('all/:unidadeid')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getFuncionarioByUnidadeId(@Param('unidadeid') unidadeid: string) {
        const funcionario = await this.getFuncionarioByUnidadeId(unidadeid);

        return funcionario;
    }

    async searchAll(result: string) {
        const search = await this.funcionarioRepository.findSearch(result);
        return search;
    }

    async getFuncionarioEmpresa(idFuncionario: string) {
        const funcionario = await this.funcionarioRepository.findOne(idFuncionario);
        const unityEmpresa: UnityFuncionarioEmpresa[] = [];
        
        if(!funcionario.trabalhista) {
            return unityEmpresa;
        }

        const empresas = await this.funcionarioRepository.getTrabalhistaByEmpresa(funcionario.trabalhista.map(id => id.empresa));
        const empresaIds = empresas.reduce((empresaId, empresas) => [
            ...empresaId,
            ...empresas.empresa,
            ...empresas.funcao
        ], []);
        
        const uniqueEmpresasIds = [... new Set(empresaIds)];
        console.log(uniqueEmpresasIds);
        return uniqueEmpresasIds;
         
    }
}