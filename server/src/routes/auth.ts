import { Request, Response, Router } from 'express'
import {signupUser} from '../controllers/auth'

const router = Router();


router.post('/signup', signupUser)

module.exports = router;