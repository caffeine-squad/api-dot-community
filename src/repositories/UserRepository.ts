import { User } from '@prisma/client';
import { IUserRepository } from './IUserRepository';
import { PrismaClient } from '@prisma/client';

export default class UserRepository implements IUserRepository {
    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
    }

    async create(user: User): Promise<number> {
        const result = await this.prisma.user.create({data: user});
        return result?.codUser;
    }

    update(id: number, user: User): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    delete(id: number): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    async get(): Promise<User[] | any>{
        return await this.prisma.bloodType.findMany();
    }
    
    getById(id: number): Promise<User> {
        throw new Error('Method not implemented.');
    }

}