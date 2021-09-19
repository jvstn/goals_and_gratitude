import { Request, Response, Router } from 'express'
import { login } from '../controllers/auth/login';
import {signupUser} from '../controllers/auth/signup'

const router = Router();


router.post('/signup', signupUser)
router.post('/login', login)

module.exports = router;