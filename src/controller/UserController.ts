import { Request, Response } from 'express';
import { autoInjectable, injectable } from 'tsyringe';
import UserService from '../services/UserService';

@autoInjectable()
export default class UserController {
    get(arg0: string, get: any) {
      throw new Error("Method not implemented.");
    }

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