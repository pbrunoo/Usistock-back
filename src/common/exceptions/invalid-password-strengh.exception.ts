import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidPasswordStrengthException extends HttpException {
    constructor() {
        super('Invalid password strength', HttpStatus.BAD_REQUEST);
    }
}