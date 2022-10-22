import { Prisma } from '@prisma/client';
import { prisma } from '../config/prismaClient';

export default class Repository {
    async create(topic: Prisma.TopicCreateInput){
        try {
            return (await prisma.topic.create({
                data: topic
            }));
        } catch (error:any) {
            const { message } = error;
            throw new Error(message);
        }
    }

    async findAll() {
		const result = await prisma.topic.findMany({
			orderBy: {
				id: 'asc'
			}
		});

		return result;
	}

    async update(id: number, description: string) {
		try {
			return await prisma.topic.update({
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
		const topicExist = await prisma.topic.findUnique({
			where: { id: Number(id) }
		});
		return topicExist;
	}

    async delete(id: number) {
		const result = await prisma.topic.delete({
			where: { id: Number(id) }
		});
		return result;
	}
}