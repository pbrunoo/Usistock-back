import { UnityFuncionarioEmpresa } from './../dto/unity-empresa.dto';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { FuncionarioEntity } from "../entities/funcionario.entity";
import { NewFuncionarioRequest } from "../requests/new-funcionario.request";
import { UpdateFuncionarioRequest } from "../requests/update-funcionario.request";
import { CreateFuncionarioService } from "../services/funcionario-create.service";
import { FuncionarioEraserService } from "../services/funcionario-erase.service";
import { FuncionarioFinderService } from "../services/funcionario-finder.service";
import { UpdateFuncionarioService } from "../services/update-funcionario.service";

@Controller('v1/funcionario')
@ApiTags('Funcionario')

export class FuncionarioController {
    constructor(
        private createFuncionarioService: CreateFuncionarioService,
        private updateFuncionarioService: UpdateFuncionarioService,
        private funcionarioEraserService: FuncionarioEraserService,
        private funcionarioFinderService: FuncionarioFinderService
    ) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({status: HttpStatus.CREATED, type: FuncionarioEntity})
    async create(@Body() newFuncionarioRequest: NewFuncionarioRequest) {
        const funcionario = await this
            .createFuncionarioService
            .create(newFuncionarioRequest);
        return funcionario;
    }

    @Put(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async update(@Param('id') id: string, @Body() updateFuncionarioRequest:UpdateFuncionarioRequest ) {
        await this.updateFuncionarioService.update(id, updateFuncionarioRequest);
    }

    @Get('all')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: [FuncionarioEntity] })
    async getAll() {
        const funcionarios = await this.funcionarioFinderService.getAll();
        return funcionarios
    }

    @Get(':nomeCompleto')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: FuncionarioEntity })
    async getByCostumerName(@Param('nomeCompleto') nomeCompleto: string) {
        const funcionario = await this.funcionarioFinderService.getByName(nomeCompleto);
        return funcionario;
    }

    @Get('unique/:id')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: FuncionarioEntity })
    async getByFuncionarioId(@Param('id') id: string) {
        const funcionario = await this.funcionarioFinderService.getById(id);

        return funcionario;
    }

    @Get('all/:unidadeid')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getFuncionarioByUnidadeId(@Param('unidadeid') unidadeid: string) {
        const funcionario = await this.funcionarioFinderService.getByUnidadeId(unidadeid);

        return funcionario;
    }

    @Get('all/funcEmpresa/:idFuncionario')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: [UnityFuncionarioEmpresa] })
    async getUnidadeEmpresa(@Param('idFuncionario') idFuncionario: string) {
        const funcionarioEmpresa = await this.funcionarioFinderService.getFuncionarioEmpresa(idFuncionario);
        return funcionarioEmpresa;
    }

    @Get('sch/:search')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getSearch(@Param('search') search: string) {
        const searchs = await this.funcionarioFinderService.searchAll(search);
        return searchs;
    }


    @Delete(':id/:userId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async delete(@Param('id') id: string, @Param('userId') userId: string) {
        await this.funcionarioEraserService.delete(id, userId);
    }
}