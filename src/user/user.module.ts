import { AuthenticationModule } from './../authentication/authentication.module';
import { CommonModule } from './../common/common.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repositories/user.repository';
import { UserController } from './controllers/user.controller';
import { CreateUserService } from './services/create-user.service';
import { UpdateUserService } from './services/update-user.service';
import { UserEraserService } from './services/user-eraser.service';
import { UserFinderService } from './services/user-finder.service';
import { UserAutenticationService } from './services/user-authentication.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './exceptions/constants';


@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserRepository,
        ]),
        CommonModule,
        AuthenticationModule
    ],
    controllers: [
        UserController
    ],
    providers: [
        CreateUserService,
        UpdateUserService,
        UserEraserService,
        UserFinderService,
        UserAutenticationService
    ],
    exports: [
        UserAutenticationService
    ]
})

export class UserModule {}