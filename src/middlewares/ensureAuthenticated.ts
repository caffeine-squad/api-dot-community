import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export default interface IToken {
    id: string,
    userType: string,
    iat: number,
    exp: number
}

export default function (req: Request, res: Response, next: NextFunction){
    const { authorization } = req.headers;

    if(!authorization) {
        return res.status(401).json("Token missing!");
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
        const { id, userType } = verify(token, process.env.SECRET_KEY_JWT as string) as IToken;
        req.userId = id;
        req.userType = userType;

        return next();

    } catch {
        return res.status(401).json("Invalid Token!");
    }
}