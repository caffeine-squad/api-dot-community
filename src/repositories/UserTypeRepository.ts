import { UserType } from '@prisma/client';
import { prisma } from '../Database/prismaClient';

export default class UserTypeRepository {
    
    async create(userType: UserType): Promise<number> {
        try {
            return (await prisma.userType.create({ data: { accessType: userType.accessType } })).id;
        } catch (error) {
            throw new Error('Error creating new user type');
        }
    }
}