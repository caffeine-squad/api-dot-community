import { User } from "@prisma/client";

export interface IUserService {
    create(user: User): Promise<number>;
    update(id: number, user: User): Promise<boolean>;
    delete(id: number): Promise<boolean>;
    get(): Promise<Array<User>>;
    getById(id: number): Promise<User>
}