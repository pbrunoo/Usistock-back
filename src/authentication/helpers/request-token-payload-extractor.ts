import { Request } from 'express';
import jwt_decode from "jwt-decode";

export const extractTokenFromRequest = (request: Request) => {
    const [, token] = request.headers.authorization.split(' ');
    const tokenDecoded: any = jwt_decode(token);

    return tokenDecoded;
}