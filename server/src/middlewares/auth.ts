import expressJwt from "express-jwt";


export const checkAuth = expressJwt({
  getToken: (req) => req.cookies.token,
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});