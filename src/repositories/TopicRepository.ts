import { Prisma, Topic } from '@prisma/client';
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

    async findAll(): Promise<Topic[]>  {
		const result = await prisma.topic.findMany({
			include: {
				user: true,
				_count: {
					select: { Comment: true },
				},
			},
			orderBy: {
				id: 'asc'
			}
		});

		return result;
	}

    async update(id: number, description: string, title: string) {
		try {
			return await prisma.topic.update({
				where: { id: Number(id) },
				data: { description, title }
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

	async getById(id: number): Promise<Topic | undefined> {
        try {
            return (await prisma.topic.findFirstOrThrow(
                {
                    where:
                        { id: id },
                    include:
                        { user: true }
                }))
        } catch (error: any) {
            const { message } = error
            throw new Error(message)
        }
    } 
}