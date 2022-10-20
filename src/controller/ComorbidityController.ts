import { Request, Response } from 'express';
import { autoInjectable, injectable } from 'tsyringe';
import ComorbidityService from '../services/ComorbidityService';

@autoInjectable()
export default class ComorbidityController {
	get(arg0: string, get: any) {
		throw new Error('Method not implemented.');
	}

	constructor(private comorbidityService: ComorbidityService) {}

	async create(request: Request, response: Response) {
		try {
			const newComorbidity = await this.comorbidityService.create(request.body);
			response.status(201).json({ id: newComorbidity });
		} catch (error) {
			response.status(400).json('Invalid data');
		}
	}

	async findAll(request: Request, response: Response) {
		const comorbidity = await this.comorbidityService.findAll();
		return response.json(comorbidity);
	}

	async update(request: Request, response: Response) {
		const { id } = request.params;
		const { description } = request.body;
		try {
			const existComorbidity = await this.comorbidityService.findUnique(Number(id));
			if (!existComorbidity) {
				return response.status(404).json('This comorbidity is not registered');
			}
			const updateComorbidity = await this.comorbidityService.update(Number(id), description);
			return response.status(200).json(updateComorbidity);
		} catch (error) {
			return response.status(400).json('Invalid Data');
		}
	}

	async delete(request: Request, response: Response) {
		const { id } = request.params;
		const existComorbidity = await this.comorbidityService.findUnique(Number(id));
		if (!existComorbidity) {
			return response.status(404).json('This comorbidity is not registered');
		}
		const deleteComorbidity = await this.comorbidityService.delete(Number(id));
		return response.status(204).json(deleteComorbidity);
	}
}
