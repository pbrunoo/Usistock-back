import { BadRequestException, Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { UserRepository } from "../repositories/user.repository";
import { UpdateUserRequest } from "../requests/update-user";

@Injectable()
export class UpdateUserService {
    constructor(
		private userRepository: UserRepository,
	) { }

    async update(userId: string, updateUserRequest: UpdateUserRequest) {
		updateUserRequest.senha  = bcrypt.hashSync(updateUserRequest.senha, 8); 
		try {
			return await this.userRepository.update(userId, updateUserRequest)
		} catch (e) {
			throw e;
		}
	}
}