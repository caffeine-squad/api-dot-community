import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';
import UserService from '../services/UserService';

@autoInjectable()
export default class UserController {

    constructor(private userService: UserService){}
    
    async create(request: Request, response: Response){
        try {
            const newUser = await this.userService.create(request.body);
            response.status(201).json({id: newUser})
        } catch (error: any) {
            const {message} = error
            response.status(400).json(message)
        }
    }

    async getAll(request: Request, response: Response){
        try {
            const userList = await this.userService.getAll();
            response.status(200).json(userList)
        } catch (error: any) {
            const {message} = error
            response.status(400).json(message)
        }
    }

    async getById(request: Request, response: Response){
        try {
            const {id} = request.params;
            const user = await this.userService.getById(Number(id));
            response.status(200).json(user)
        } catch (error: any) {
            const {message} = error
            response.status(400).json(message)
        }
    }  
}