import { JWTTokenGeneratorService } from './../../authentication/services/jwt-token-generator.service';
import { PasswordEncrypterService } from './../../common/services/password-encrypter.service';
import { UserRepository } from "../repositories/user.repository";
import { UserSignin } from '../value-objects/user-signin';
export declare class UserAutenticationService {
    private userRepository;
    private passwordEncrypterService;
    private jwtTokenGeneratorService;
    constructor(userRepository: UserRepository, passwordEncrypterService: PasswordEncrypterService, jwtTokenGeneratorService: JWTTokenGeneratorService);
    authenticate(userSignin: UserSignin): Promise<string>;
}
