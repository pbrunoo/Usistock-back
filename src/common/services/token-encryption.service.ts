import { Injectable } from '@nestjs/common';
import { AuthConfig } from 'src/config/auth.config';

const Cryptr = require('cryptr');

@Injectable()
export class TokenEncryptionService {
    private cryptr: any;

    constructor() {
        this.cryptr = new Cryptr(AuthConfig.token.key);
    }

    encrypt(text: string): string {
        return this.cryptr.encrypt(text);
    }

    decryption(encrypted: string): string {
        return this.cryptr.decrypt(encrypted);
    }
}