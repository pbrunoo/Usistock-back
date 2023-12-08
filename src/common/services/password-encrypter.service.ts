import { InvalidPasswordStrengthException } from './../exceptions/invalid-password-strengh.exception';
import { InvalidPasswordLengthException } from './../exceptions/invalid-password-length.exception';
import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordEncrypterService {
    public static readonly MIN_LENGTH = 6;
    public static readonly PASSWORD_STRENGTH_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;

    encrypt(password: string) {
        const passwordLengthIsLowerThenMinRequired = password.length < PasswordEncrypterService.MIN_LENGTH;
        
        if(passwordLengthIsLowerThenMinRequired) {
            throw new InvalidPasswordLengthException();
        }

        const passwordMatchRequiredStrength = password.match(PasswordEncrypterService.PASSWORD_STRENGTH_REGEX);

        if(!passwordMatchRequiredStrength) {
            throw new InvalidPasswordStrengthException();
        }

        const salt = bcrypt.gentSaltSync(10);
        const encryptedPassword = bcrypt.hashSync(password, salt);
        return encryptedPassword;
    }

    passwordIsAMatch(plainPassword: string, hashedPassword: string) {
        return bcrypt.compareSync(plainPassword, hashedPassword);
    }
}