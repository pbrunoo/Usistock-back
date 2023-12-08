import { UserAutenticationService } from './../user-authentication.service';
export declare class AuthService {
    private userAutenticationService;
    constructor(userAutenticationService: UserAutenticationService);
    validateUser(username: string, pass: string): Promise<any>;
}
