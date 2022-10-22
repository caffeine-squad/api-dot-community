import { Prisma } from '@prisma/client';
import { autoInjectable } from 'tsyringe';
import { ComorbidityDTO } from '../models/Comorbidity';
import ComorbidityRepository from '../repositories/ComorbidityRepository';

@autoInjectable()
export default class ComorbidityService {
	constructor(private comorbidityRepository: ComorbidityRepository) {}

	async create(comorbidity: ComorbidityDTO): Promise<number> {
		let comorbidityDTO: Prisma.ComorbidityCreateInput;

		comorbidityDTO = {
			description: comorbidity.description
		};

		const newComorbidity = await this.comorbidityRepository.create(comorbidityDTO);
		return newComorbidity;
	}

	async findAll() {
		const comorbidity = await this.comorbidityRepository.findAll();
		return comorbidity;
	}

	async update(id: number, description: string) {
		const updateComorbidity = await this.comorbidityRepository.update(id, description);
		return updateComorbidity;
	}

	async findUnique(id: number) {
		const existComorbidity = await this.comorbidityRepository.findUnique(id);
		return existComorbidity;
	}

	async delete(id: number){
		const deleteComorbidity = await this.comorbidityRepository.delete(id);
		return deleteComorbidity;
	}

}
