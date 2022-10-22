import { Request, Response } from "express";
import AuthService from "../services/AuthService";
import { autoInjectable } from "tsyringe";
import { isAnyArrayBuffer } from "util/types";

@autoInjectable()
export default class AuthController {

    constructor(private authService: AuthService){}

    async autentication(req: Request, res: Response){
        try {
            
            const token = await this.authService.autentication(req);
            return res.json(token);

        } catch (error: any) {
            const {message} = error;
            res.status(400).json({message})
        }
    }
}