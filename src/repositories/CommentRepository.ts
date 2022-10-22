import { Prisma } from '@prisma/client';
import { prisma } from '../config/prismaClient';

export default class Repository {
    async create(comment: Prisma.CommentCreateInput){
        try {
            return (await prisma.comment.create({
                data: comment
            }));
        } catch (error:any) {
            const { message } = error;
            throw new Error(message);
        }
    }

    async findAll() {
		const result = await prisma.comment.findMany({
			orderBy: {
				id: 'asc'
			}
		});

		return result;
	}

    async update(id: number, description: string) {
		try {
			return await prisma.comment.update({
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
		const commentExist = await prisma.comment.findUnique({
			where: { id: Number(id) }
		});
		return commentExist;
	}

    async delete(id: number) {
		const result = await prisma.comment.delete({
			where: { id: Number(id) }
		});
		return result;
	}
}