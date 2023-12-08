import { UserEraserService } from 'src/user/services/user-eraser.service';
export declare class AuthService {
    private userService;
    constructor(userService: UserEraserService);
    validateUser(login: string, pass: string): Promise<any>;
}
