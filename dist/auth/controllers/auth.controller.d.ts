import { AuthService } from './../services/auth.service';
import { UserSignInRequest } from './../request/UserSignInRequest';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userSignInRequest: UserSignInRequest): Promise<any>;
}
