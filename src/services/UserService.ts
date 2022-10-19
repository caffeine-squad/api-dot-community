import { Address, Prisma, User } from '@prisma/client';
import UserRepository from '../repositories/UserRepository';
import { autoInjectable } from 'tsyringe';
import { UserDTO } from '../models/User';

@autoInjectable()
export default class UserService {

    constructor( private userRepository: UserRepository) {}
    
    async create(user: UserDTO): Promise<number> {
        let userDTO: Prisma.UserCreateInput

        userDTO = {
            name: user.name,
            email: user.email,
            birthDate: new Date(user.birthDate),
            cnpj: user.cnpj,
            cellPhone: user.cellPhone,
            password: user.password,
            userType: {connect: {id: user.userTypeId}},
            bloodType: {connect: {id: user.bloodType}},
            OrganUser: {createMany: {data: user.organUser}},
            UserComobidity: {createMany: {data: user.userComobidity}},
            address: {create:{
                cep: user.address.cep,
                address: user.address.address,
                number: user.address.number,
                complement: user.address.complement,
                district: user.address.district,
                city: user.address.city,
                uf: user.address.uf
            }}
        }
        const newUser = this.userRepository.create(userDTO);
        return newUser;
    }
}