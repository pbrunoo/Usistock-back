import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidPasswordLengthException extends HttpException {
    constructor() {
        super('Invalid password length', HttpStatus.BAD_REQUEST);
    }
}