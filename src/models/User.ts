import { Prisma } from "@prisma/client"

export type UserDTO = {
    name: string,
    email: string,
    birthDate: Date,
    cnpj: string,
    cellPhone: string,
    password: string,
    userTypeId: number,
    bloodType: number,
    organUser: Prisma.OrganUserCreateManyUserInput[],
    userComobidity: Prisma.UserComobidityCreateManyUserInput[],
    address: AddressDTO
}

export type AddressDTO = {
    id: Number,
    cep: string,
    address: string,
    number: number,
    complement: string,
    district: string,
    city: string,
    uf: string
}

