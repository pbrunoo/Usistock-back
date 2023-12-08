import { UserEntity } from '../entities/user.entity';
import { NewUserRequest } from '../requests/new-user';
import { CreateUserService } from '../services/create-user.service';
import { UpdateUserService } from '../services/update-user.service';
import { UserEraserService } from '../services/user-eraser.service';
import { UserFinderService } from '../services/user-finder.service';
import { UpdateUserRequest } from '../requests/update-user';
import { UserSignInRequest } from '../requests/UserSignInRequest';
import { UserAutenticationService } from '../services/user-authentication.service';
export declare class UserController {
    private createUserService;
    private updateUserService;
    private userEraserService;
    private userFinderService;
    private userAuthenticationService;
    constructor(createUserService: CreateUserService, updateUserService: UpdateUserService, userEraserService: UserEraserService, userFinderService: UserFinderService, userAuthenticationService: UserAutenticationService);
    create(newUserRequest: NewUserRequest): Promise<NewUserRequest & UserEntity>;
    update(id: string, updateUserRequest: UpdateUserRequest): Promise<void>;
    getAll(): Promise<UserEntity[]>;
    getSearch(search: string, unidadeid: string): Promise<UserEntity[]>;
    getByUserId(id: string): Promise<UserEntity>;
    delete(id: string): Promise<void>;
    getUsersByUnidadeId(unidadeid: string): Promise<UserEntity[]>;
    signIn(clientSignin: UserSignInRequest): Promise<string>;
}
