import { AdminGuard } from './../../authentication/guards/admin.guards';
import { Controller, Post, HttpStatus, Body, HttpCode, Get, Put, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from "../repositories/user.repository";
import { NewUserRequest } from '../requests/new-user';
import { CreateUserService } from '../services/create-user.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateUserService } from '../services/update-user.service';
import { UserEraserService } from '../services/user-eraser.service';
import { UserFinderService } from '../services/user-finder.service';
import { UpdateUserRequest } from '../requests/update-user';
import { ObjectId } from 'mongodb';
import { AuthGuard } from '@nestjs/passport';
import { UserSignInRequest } from '../requests/UserSignInRequest';
import { UserAutenticationService } from '../services/user-authentication.service';
import { UserSignin } from '../value-objects/user-signin';
import { TokenDecoded } from 'src/authentication/decorators/token-decoded.decorator';
import { UserJWTPayload } from '../value-objects/user-jwt-payload';
import { AuthenticatedUserReaderService } from '../services/authenticated-user-reader.service';

@Controller('v1/user')
@ApiTags('User')
export class UserController {

    constructor(
        private createUserService: CreateUserService,
        private updateUserService: UpdateUserService,
        private userEraserService: UserEraserService,
        private userFinderService: UserFinderService,
        private userAuthenticationService: UserAutenticationService
    ) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: HttpStatus.CREATED, type: UserEntity })
    async create(@Body() newUserRequest: NewUserRequest) {
        const user = await this
            .createUserService
            .create(newUserRequest);

        return user;
    }

    @Put(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async update(@Param('id') id: string, @Body() updateUserRequest: UpdateUserRequest) {
        await this.updateUserService.update(id, updateUserRequest);
    }

    @Get('all')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: [UserEntity] })
    async getAll() {
        const users = await this.userFinderService.getAll();

        return users;
    }

    @Get('sch/:search/:unidadeid')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getSearch(@Param('search') search: string, @Param('unidadeid') unidadeid: string) {
        const searchs = await this.userFinderService.searchAll(search, unidadeid);
        return searchs;
    }

    @Get('unique/:id')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: UserEntity })
    async getByUserId(@Param('id') id: string) {
        const user = await this.userFinderService.getById(id);

        return user;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async delete(@Param('id') id: string) {
        await this.userEraserService.delete(id);
    }

    @Get('all/:unidadeid')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getUsersByUnidadeId(@Param('unidadeid') unidadeid: string) {
        const users = await this.userFinderService.getByUnidadeId(unidadeid);

        return users;
    }

    @Post('signin')
    @ApiResponse({ status: HttpStatus.OK, type: String})
    async signIn(@Body() clientSignin: UserSignInRequest) {
        const token = await this
            .userAuthenticationService
            .authenticate(clientSignin);
        return token;
    }
}