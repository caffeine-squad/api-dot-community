import { IUserRepository } from './../repositories/IUserRepository';
import { User } from '@prisma/client';
import { IUserService } from './IUserService';
import UserRepository  from '../repositories/UserRepository';

export default class UserService implements IUserService {
    private  userRepository: IUserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(user: User): Promise<number> {
        const result = this.userRepository.create(user);
        return result;
    }
    update(id: number, user: User): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    delete(id: number): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    get(id: number): Promise<User>;
    get(): Promise<User[]>;
    get(id?: unknown): Promise<User> | Promise<User[]> {
        throw new Error('Method not implemented.');
    }

}