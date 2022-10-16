import { User } from "@prisma/client";

export interface IUserRepository {
    create(user: User): Promise<number>;
    update(id: number, user: User): Promise<boolean>;
    delete(id: number): Promise<boolean>;
    get(): Promise<User[] | any>;
    getById(id: number): Promise<User>
}