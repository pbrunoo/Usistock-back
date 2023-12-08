import { BadRequestException, Get, HttpCode, HttpStatus, Injectable, Param } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { ObjectId } from "mongodb";
import { ObjectID } from "typeorm";
import { UserRepository } from "../repositories/user.repository";

@Injectable()
export class UserFinderService {
    constructor(
		private userRepository: UserRepository,
	) { }

    async getAll() {
		const users = await this.userRepository.getAll();
		return users;
	}

    async getById(id: string) {
        const user = await this.userRepository.findOne(id);
		return user;
	}

	async getByUnidadeId(id: string) {
        const users = await this.userRepository.getUserByUnidadeId(id);
		return users;

	}

	async searchAll(result: string, unidadeid: string) {
		const search = await this.userRepository.findSearch(result, unidadeid);
		return search;
	}
	
	@Get('all/:unidadeid')
	@HttpCode(HttpStatus.OK)
	@ApiResponse({ status: HttpStatus.OK, type: String })
	async getUsersByUnidadeId(@Param('unidadeid') unidadeid: string) {
    	const users = await this.getByUnidadeId(unidadeid);

    	return users;
  	}
	
	
}