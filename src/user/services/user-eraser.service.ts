import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';


@Injectable()
export class UserEraserService {
    constructor(
        private userRepository: UserRepository,
    ) {}

    async delete(id: string) {
        const user = await this.userRepository.findOne(id);
        user.status = 0;
        await this.userRepository.save(user);
    }
}