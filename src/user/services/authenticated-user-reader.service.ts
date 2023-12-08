import { UserRepository } from './../repositories/user.repository';
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthenticatedUserReaderService {
    constructor(
        private userRepository: UserRepository
    ) {}

    async findAuthenticatedUserById(userId: string) {
        const user = await this.userRepository.findOne(userId);
    }
}