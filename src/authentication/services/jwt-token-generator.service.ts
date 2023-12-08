import { JwtService } from '@nestjs/jwt';
import { Injectable } from "@nestjs/common";

@Injectable()
export class JWTTokenGeneratorService {
    constructor(private jwtService: JwtService) {}

    generateWithPayLoad(payload) {
        return this
            .jwtService
            .sign(payload);
    }
}