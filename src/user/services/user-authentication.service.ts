import { JWTTokenGeneratorService } from './../../authentication/services/jwt-token-generator.service';
import { PasswordEncrypterService } from './../../common/services/password-encrypter.service';
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InvalidCredentialsException } from "../exceptions/invalid-credentials.exception";
import { UserRepository } from "../repositories/user.repository";
import { UserSignInRequest } from "../requests/UserSignInRequest";
import { UserSignin } from '../value-objects/user-signin';
import { stringify } from 'node:querystring';

@Injectable()

export class UserAutenticationService {
    constructor(
        private userRepository : UserRepository,
        private passwordEncrypterService: PasswordEncrypterService,
        private jwtTokenGeneratorService: JWTTokenGeneratorService
        ) {}
        
    async authenticate(userSignin: UserSignin) {
        const user = await this.userRepository.findByLogin(userSignin.login);
    
        if (!user) {
            throw new InvalidCredentialsException();
        }

        const isPasswordValid = this
            .passwordEncrypterService
            .passwordIsAMatch(userSignin.password, user.senha)
        
        if (!isPasswordValid) {
            throw new InvalidCredentialsException();
        }

        const jwtToken = this
            .jwtTokenGeneratorService
            .generateWithPayLoad({
                sub: user.id.toString(),
                subscriptionId: user.nivelAcesso,
                roles: user.login
            });
        /// TEM QUE RETORNAR O jwtToken
        return jwtToken;
    }
}