import { Request, Response } from "express";
import AuthService from "../services/AuthService";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export default class AuthController {

    constructor(private authService: AuthService){}

    async autentication(req: Request, res: Response){
        try {
            
            const token = await this.authService.autentication(req);
            return res.json(token);

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}