import { User } from '@prisma/client';
import { Request, Response } from 'express';
import  UserService  from '../services/UserService';
import { IUserService } from './../services/IUserService';

export default class UserController {
    
    private readonly _userService: IUserService;

    constructor(userService: IUserService) {
        this._userService = userService;
    }

    async get(request: Request, response: Response){
        const result : User[] = await this._userService.get();
        response.status(200).json(result);
    }
}