import { User } from '../entities/abstractions/user';
import { UserSignin } from '../value-objects/user-signin';
export declare class UserSignInRequest implements UserSignin {
    login: User['login'];
    password: User['senha'];
}
