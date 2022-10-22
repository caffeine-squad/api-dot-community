import { Prisma, User } from '@prisma/client';
import { prisma } from '../config/prismaClient';

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

    async getAll(): Promise<Array<User>> {
        try {
            return (await prisma.user.findMany({ include: { address: true, bloodType: true, UserComobidity: true } }))
        } catch (error: any) {
            const { message } = error
            throw new Error(message)
        }
    }

    async getById(id: number): Promise<User | undefined> {
        try {
            return (await prisma.user.findFirstOrThrow(
                {
                    where:
                        { codUser: id },
                    include:
                        { address: true, bloodType: true, UserComobidity: true }
                }))
        } catch (error: any) {
            const { message } = error
            throw new Error(message)
        }
    }

    async GetByEmail(email : string){
        try {
            return await prisma.user.findFirst({ 
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