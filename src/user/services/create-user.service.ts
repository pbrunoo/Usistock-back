import { BadRequestException, Injectable } from "@nestjs/common";
import { UserRepository } from "../repositories/user.repository";
import { NewUserRequest } from "../requests/new-user";
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserService {
    constructor(
		private userRepository: UserRepository,
	) { }

    async create(newUserRequest: NewUserRequest) {
		newUserRequest.senha  = bcrypt.hashSync(newUserRequest.senha, 8); 
		try {
            const user = await this.userRepository.find({
				where: {
					login: newUserRequest.login
				}
			})

            if (user.length > 0) {
                throw new BadRequestException(`Esse login já existe.`)
            }
			
			return this.userRepository.save(newUserRequest);
		} catch (e) {
			let errorMessage = e.message;
			if (e?.code === 11000) errorMessage = "Duplicated Index"

			throw new BadRequestException(errorMessage)
		}
	}
		
}