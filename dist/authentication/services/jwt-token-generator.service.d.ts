import { JwtService } from '@nestjs/jwt';
export declare class JWTTokenGeneratorService {
    private jwtService;
    constructor(jwtService: JwtService);
    generateWithPayLoad(payload: any): string;
}
