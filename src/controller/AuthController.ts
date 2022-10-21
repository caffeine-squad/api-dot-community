import { Request, Response } from "express";
import { prisma } from "../config/prismaClient";
import bcrypt from "bcryptjs";
import { hash } from "bcryptjs";
import jwt from "jsonwebtoken";

export class AuthController {
    async autentication(req: Request, res: Response){

        const { email, password } = req.body;
        console.log(email, password);
        
        const userExist = await prisma.user.findFirst({ 
            where: { 
                email
            },
            include: {
                userType: true
            },
        });

        if(!userExist) {
            return res.status(401).json("Authentication failure");
        }

        console.table(await hash(password, 8));
        const isValidPassword = await bcrypt.compare(password, userExist.password);

        if(!isValidPassword) {
            console.table("aqui");
            return res.status(401).json("Authentication failure");
        }

        const token = jwt.sign(
            {
                id: userExist.email,
                userType: userExist.userType
            },
            process.env.SECRET_KEY_JWT as string, 
            { expiresIn: '1h' }
        );

        const user = {
            "id": userExist.codUser,
            "name": userExist.name,
            "userType": userExist.userType.accessType
        }
        return res.json({
            user,
            token,
        });
    }
}