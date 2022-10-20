import { Prisma } from '@prisma/client';
import { prisma } from '../Database/prismaClient';

export default class Repository {
	async create(comorbidity: Prisma.ComorbidityCreateInput): Promise<number> {
		try {
			return (await prisma.comorbidity.create({
				data: comorbidity
			})).id;
		} catch (error: any) {
			const { message } = error;
			throw new Error(message);
		}
	}

	async findAll() {
		const result = await prisma.comorbidity.findMany({
			orderBy: {
				id: 'asc'
			}
		});

		return result;
	}

	async update(id: number, description: string) {
		try {
			return await prisma.comorbidity.update({
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
		const comorbidityExist = await prisma.comorbidity.findUnique({
			where: { id: Number(id) }
		});
		return comorbidityExist;
	}

	async delete(id: number) {
		const result = await prisma.comorbidity.delete({
			where: { id: Number(id) }
		});
		return result;
	}
}
