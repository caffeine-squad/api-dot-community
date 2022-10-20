import { User } from "@prisma/client";

export interface IUserRepository {
    create(user: User): Promise<number>;
    update(id: number, user: User): Promise<boolean>;
    delete(id: number): Promise<boolean>;
    get(id: number): Promise<User>;
    get(): Promise<Array<User>>;
}
