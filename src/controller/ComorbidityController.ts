import { Request, Response } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
import { comorbidityRoutes } from '../routes/comorbidity.routes';

const prisma = new PrismaClient();

export class ComobidityController {
	async CreateComorbidity(req: Request, res: Response) {
		const { description } = req.body;

		try {
			const comorbidity = await prisma.comorbidity.create({
				data: {
					description
				}
			});
			return res.status(200).json(comorbidity);
		} catch (err) {
			return res.status(400).json('Invalid data');
		}
	}

	async FindAllComorbidity(request: Request, response: Response) {
		const comorbidity = await prisma.comorbidity.findMany();

		return response.json(comorbidity);
	}

	async DeletComorbidity(req: Request, res: Response) {
		const { id } = req.params;

		const comorbidityExist = await prisma.comorbidity.findUnique({ where: { id: Number(id) } });

		if (!comorbidityExist) {
			return res.status(400).json('This comobidity is not registered');
		}

		const comorbidity = await prisma.comorbidity.delete({
			where: {
				id: Number(id)
			}
		});

		return res.status(204).send('Sucess');
	}

	async UpdateComorbidity(req: Request, res: Response) {
		const { id } = req.params;
		const { description } = req.body;

		try {
			const comorbidityExist = await prisma.comorbidity.findUnique({ where: { id: Number(id) } });

			if (!comorbidityExist) {
				return res.status(400).json('This user is not registered');
			}

			const comobidity = await prisma.comorbidity.update({
				where: {
					id: Number(id)
				},
				data: {
					description
				},
				select: {
					description: true
				}
			});
			return res.status(200).json(description);
		} catch (err) {
			return res.status(400).json('Invalid data');
		}
	}
}
