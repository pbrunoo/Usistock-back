export declare class PasswordEncrypterService {
    static readonly MIN_LENGTH = 6;
    static readonly PASSWORD_STRENGTH_REGEX: RegExp;
    encrypt(password: string): any;
    passwordIsAMatch(plainPassword: string, hashedPassword: string): any;
}
