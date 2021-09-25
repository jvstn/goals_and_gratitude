import { Router } from "express";
import { login } from "../controllers/auth/login";
import { logoutUser } from "../controllers/auth/logout";
import { signupUser } from "../controllers/auth/signup";

const router = Router();

router.post("/signup", signupUser);
router.post("/login", login);
router.get("/logout", logoutUser);

module.exports = router;
