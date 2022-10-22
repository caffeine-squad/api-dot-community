import { hash } from 'bcryptjs';
import { Prisma, User } from '@prisma/client';
import UserRepository from '../repositories/UserRepository';
import { autoInjectable } from 'tsyringe';
import { UserDTO } from '../models/User';

// interface IUserResponse {
//     codUser: number,
//     name: string,
//     email: string,
//     birthDate: Date,
//     cnpj: string,
//     cellPhone: number,
//     password: string,
//     userTypeId: number,
//     addressId: number,
//     bloodTypeId: number,
//     address: {
//         id: number,
//         cep: string,
//         address: string,
//         number: number,
//         complement: string,
//         district: string,
//         city: string,
//         uf: string
//     },
//     bloodType: string,
//     UserComobidity: {
//         description: string
//     }
// }

@autoInjectable()
export default class UserService {
    constructor(private userRepository: UserRepository) { }

    async create(user: UserDTO): Promise<number> {

        let userDTO: Prisma.UserCreateInput

        userDTO = {
            name: user.name,
            email: user.email,
            birthDate: new Date(user.birthDate),
            cnpj: user.cnpj,
            cellPhone: user.cellPhone,
            password: await hash(user.password, 8),
            userType: { connect: { id: user.userTypeId } },
            bloodType: user.bloodType ? { connect: { id: user.bloodType } } : undefined,
            OrganUser: { createMany: { data: user.organUser || [] } },
            UserComobidity: { createMany: { data: user.userComobidity || [] } },
            address: {
                create: {
                    cep: user.address.cep,
                    address: user.address.address,
                    number: user.address.number,
                    complement: user.address.complement,
                    district: user.address.district,
                    city: user.address.city,
                    uf: user.address.uf
                }
            }
        }
        const newUser = await this.userRepository.create(userDTO);
        return newUser;
    }

    async getAll(): Promise<Array<User>> {
        const userList = await this.userRepository.getAll();
        return userList;
    }

    async getById(codUser: number): Promise<User | undefined> {

        let response = (await this.userRepository.getById(codUser));

        return response;
    }

}