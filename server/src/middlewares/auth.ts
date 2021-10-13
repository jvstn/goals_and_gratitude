import expressJwt from "express-jwt";
import {Request, Response, NextFunction} from 'express'


export const checkAuth = expressJwt({
    getToken: (req) => req.cookies.token,
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
  })