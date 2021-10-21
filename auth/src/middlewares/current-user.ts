
import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express';

interface UserPayload {
  id: number;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}
const authentication = (req: Request, res: Response, next: NextFunction) => {
  const bearerHeader = req.headers.authorization;
  if (bearerHeader === undefined) {
    return res.status(401).send('Authentication Failed');
  }
  const bearer = bearerHeader.split(' ');
  const bearerToken = bearer[1];
  const token = bearerToken;
  return jwt.verify(token, 'secret', (error: any, data: any) => {
    if (error) {
      return res.status(401).send('Authentication Failed');
    }
    req.currentUser = data;
    return next();
  });
};

export default authentication;