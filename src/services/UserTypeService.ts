import { UserType } from '@prisma/client';
import { autoInjectable } from 'tsyringe';
import UserTypeRepository from '../repositories/UserTypeRepository';

@autoInjectable()
export default class UserTypeService {
    
    constructor(private userTypeRepository: UserTypeRepository){ }

    async create(userType: UserType ): Promise<number> {
        return await this.userTypeRepository.create(userType);
    }
    
}