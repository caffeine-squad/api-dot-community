import { Request, Response } from 'express';
import { autoInjectable, injectable } from 'tsyringe';
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
            response.status(400).json({message})
        }
    }
    
}