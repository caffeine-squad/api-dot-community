import { IUserRepository } from './../repositories/IUserRepository';
import { User } from '@prisma/client';
import { IUserService } from './IUserService';

export default class UserService implements IUserService {
    private readonly _userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this._userRepository = userRepository;
    }

    async create(user: User): Promise<number> {
        const result = this._userRepository.create(user);
        return result;
    }

    update(id: number, user: User): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    delete(id: number): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    async get(): Promise<User[]>{
        return await this._userRepository.get();
    }

    getById(id: number): Promise<User> {
        throw new Error('Method not implemented.');
    }

}