import { Router } from 'express'
import { createAffirmation } from '../controllers/affirmations';
import { checkAuth } from '../middlewares/auth';


const router = Router();

router.post('/grats', checkAuth, createAffirmation);

module.exports = router;