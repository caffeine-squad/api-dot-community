import { Request, Response } from 'express';
import  UserService  from '../services/UserService';
import { IUserService } from './../services/IUserService';

export default class UserController {
    
    private userService: IUserService;

    constructor() {
        this.userService = new UserService();
    }

    async get(request: Request, response: Response){
        response.status(200).json({status: 'success'})
    }
}

