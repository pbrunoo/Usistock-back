import { TokenEncryptionService } from './services/token-encryption.service';
import { Module } from '@nestjs/common';
import { PasswordEncrypterService } from './services/password-encrypter.service';

@Module({
    providers: [
        PasswordEncrypterService,
        TokenEncryptionService
    ],
    exports: [
        PasswordEncrypterService,
        TokenEncryptionService
    ]
})
export class CommonModule {}