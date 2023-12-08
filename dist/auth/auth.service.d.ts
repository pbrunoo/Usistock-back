import { UsService } from './user.service';
export declare class AuthService {
    private usService;
    constructor(usService: UsService);
    validateUser(username: string, pass: string): Promise<any>;
}
