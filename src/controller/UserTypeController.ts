import { Request, Response } from 'express';
import { autoInjectable, inject, injectable } from 'tsyringe';
import { prisma } from '../Database/prismaClient';
import UserTypeService from '../services/UserTypeService';

@injectable()
export default class UserTypeController {

    constructor( private userTypeService: UserTypeService) {}

    async create(request: Request, response: Response) {
        try {
            const newUserType = await this.userTypeService.create(request.body);
            console.log('teste')
            response.status(201).json({id: newUserType})
        } catch (error:any) {
            const {message} = error
            response.status(400).json({message})
        }
    }

    async get(request: Request, response: Response) {
        const usersType = await prisma.userType.findMany()
        response.status(200).json(usersType)
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params
        const result = await prisma.userType.delete({ where: { id: Number(id) } })
        response.status(204)
    }
}