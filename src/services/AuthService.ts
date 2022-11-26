import { autoInjectable } from 'tsyringe';
import { Request } from 'express';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserRepository from '../repositories/UserRepository';

interface ITokenResponse {
    user: IUsertoken,
    token: string
}

interface IUsertoken {
    id: number,
    name: string,
    userType: string,
}

@autoInjectable()
export default class AuthService {

    constructor( private userRepository: UserRepository) {}
    
    async autentication(req: Request){
        const { email, password } = req.body;

        const user = await this.userRepository.GetByEmail(email);

        if(!user) {
            throw new Error("Authentication failure");
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword) {
            throw new Error("Authentication failure");
        }

        const token = jwt.sign(
            {
                id: user.codUser,
                userType: user.userType.accessType
            },
            process.env.SECRET_KEY_JWT as string, 
            { expiresIn: '1h' }
        );

        const usertoken: IUsertoken = {
            id : user.codUser,
            name : user.name,
            userType: user.userType.accessType
        };

        const tokenResponse : ITokenResponse = {
            user: usertoken,
            token: token
        }

        return tokenResponse;
    }
}