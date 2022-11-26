import { Response } from 'express';
import { hash } from 'bcryptjs';
import { Prisma, User } from '@prisma/client';
import UserRepository from '../repositories/UserRepository';
import { autoInjectable } from 'tsyringe';
import { UserDTO, UserUpdateDTO } from '../models/User';
import { Exclude } from '../utils/IsUserTypeEnum';

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

        const responseUser = await this.userRepository.getAll();
        return responseUser;
    }

    async getById(codUser: number): Promise<User> {

        let user = (await this.userRepository.getById(codUser));
        const userWithoutPassword = Exclude(user, ['password']);

        return userWithoutPassword;
    }

    async put(codUser: number, user: UserUpdateDTO): Promise<void> {

        let userDTO: Prisma.UserUpdateInput

        userDTO = {
            name: user.name,
            email: user.email,
            birthDate: new Date(user.birthDate),
            cnpj: user.cnpj,
            cellPhone: user.cellPhone,
            OrganUser: {updateMany: {data: user.organUser} || user.organUser},
            // UserComobidity: user.userComobidity,
            address: {
                update: {
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
        await this.userRepository.put(codUser, userDTO);
    }
}