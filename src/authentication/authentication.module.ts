import { PasswordEncrypterService } from './../common/services/password-encrypter.service';
import { AdminAuthStrategy } from './strategies/admin-auth.strategy';
import { JWTTokenGeneratorService } from './services/jwt-token-generator.service';
import { AuthConfig } from './../config/auth.config';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        PassportModule,
        JwtModule.register(AuthConfig.jwt)
    ],
    providers: [
        JWTTokenGeneratorService,
        AdminAuthStrategy
    ],
    exports: [
        JWTTokenGeneratorService
    ]
})
export class AuthenticationModule {}