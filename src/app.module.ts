import { AuthenticationModule } from './authentication/authentication.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { Config } from './config/config';
import { ORMConfig } from './config/database';
import { ClientesModule } from './clientes/clientes.module';
import { FornecedoresModule } from './fornecedor/fornecedor.module';
import { ConsumoModule } from './consumo/consumo.module';
import { EmpresaModule } from './empresa/empresa.module'
import { UnidadeModule } from './unidade/unidade.module';
import { VeiculoModule } from './veiculos/veiculo.module';
import { FuncionariosModule } from './funcionario/funcionario.module';
import { EstoqueModule } from './estoque/estoque.module';
import { OrcamentoModule } from './orcamento/orcamento.module';
import { PedidoModule } from './pedidos/pedido.module';
 

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Config],
      isGlobal: true
    }),
    TypeOrmModule.forRoot(ORMConfig),
    ClientesModule,
    ConsumoModule,
    EmpresaModule,
    EstoqueModule,
    FornecedoresModule,
    FuncionariosModule,
    OrcamentoModule,
    PedidoModule,
    UserModule,
    UnidadeModule,
    VeiculoModule,
    AuthenticationModule
  ],
})
export class AppModule {}
