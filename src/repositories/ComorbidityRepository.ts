import { Prisma } from '@prisma/client';
import { prismaClient } from '../config/prismaClient';

export default class Repository {
	async create(comorbidity: Prisma.ComorbidityCreateInput): Promise<number> {
		try {
			return (await prismaClient.comorbidity.create({
				data: comorbidity
			})).id;
		} catch (error: any) {
			const { message } = error;
			throw new Error(message);
		}
	}

	async findAll() {
		const result = await prismaClient.comorbidity.findMany({
			orderBy: {
				id: 'asc'
			}
		});

		return result;
	}

	async update(id: number, description: string) {
		try {
			return await prismaClient.comorbidity.update({
				where: { id: Number(id) },
				data: { description },
				select: {
					description: true
				}
			});
		} catch (error: any) {
			const { message } = error;
			throw new Error(message);
		}
	}

	async findUnique(id: number) {
		const comorbidityExist = await prismaClient.comorbidity.findUnique({
			where: { id: Number(id) }
		});
		return comorbidityExist;
	}

	async delete(id: number) {
		const result = await prismaClient.comorbidity.delete({
			where: { id: Number(id) }
		});
		return result;
	}
}
