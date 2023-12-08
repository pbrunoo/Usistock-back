import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { User } from '../entities/abstractions/user';
import { UserSignin } from '../value-objects/user-signin';

export class UserSignInRequest implements UserSignin {
    
    @ApiProperty({ type: String })
    @IsNotEmpty()
    login: User['login'];

    @ApiProperty({ type: String })
    @IsNotEmpty()
    password: User['senha'];
}