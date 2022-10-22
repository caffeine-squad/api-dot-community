import { Address, Prisma } from '@prisma/client';
import { prisma } from '../Database/prismaClient';
import { prismaClient } from '../config/prismaClient';

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

    async GetByEmail(email : string){
        try {
            return await prismaClient.user.findFirst({ 
                where: { 
                    email
                },
                include: {
                    userType: true
                }
            });
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}