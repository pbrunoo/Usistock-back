"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const authentication_module_1 = require("./authentication/authentication.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const config_2 = require("./config/config");
const database_1 = require("./config/database");
const clientes_module_1 = require("./clientes/clientes.module");
const fornecedor_module_1 = require("./fornecedor/fornecedor.module");
const consumo_module_1 = require("./consumo/consumo.module");
const empresa_module_1 = require("./empresa/empresa.module");
const unidade_module_1 = require("./unidade/unidade.module");
const veiculo_module_1 = require("./veiculos/veiculo.module");
const funcionario_module_1 = require("./funcionario/funcionario.module");
const estoque_module_1 = require("./estoque/estoque.module");
const orcamento_module_1 = require("./orcamento/orcamento.module");
const pedido_module_1 = require("./pedidos/pedido.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [config_2.Config],
                isGlobal: true
            }),
            typeorm_1.TypeOrmModule.forRoot(database_1.ORMConfig),
            clientes_module_1.ClientesModule,
            consumo_module_1.ConsumoModule,
            empresa_module_1.EmpresaModule,
            estoque_module_1.EstoqueModule,
            fornecedor_module_1.FornecedoresModule,
            funcionario_module_1.FuncionariosModule,
            orcamento_module_1.OrcamentoModule,
            pedido_module_1.PedidoModule,
            user_module_1.UserModule,
            unidade_module_1.UnidadeModule,
            veiculo_module_1.VeiculoModule,
            authentication_module_1.AuthenticationModule
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map