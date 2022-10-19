import { Address, Prisma, User } from '@prisma/client';
import { prisma } from '../Database/prismaClient';

export default class UserRepository {

    async create(user: Prisma.UserCreateInput): Promise<number> {
        try {
            return (await prisma.user.create({
                data:
                    user
            })).codUser;
        } catch (error: any) {
            const { message } = error
            throw new Error(message)
        }
    }
}