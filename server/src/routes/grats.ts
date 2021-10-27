import { Router } from 'express'
import { createAffirmation, readAffirmations } from '../controllers/affirmations';
import { checkAuth } from '../middlewares/auth';


const router = Router();

router.post('/grats', checkAuth, createAffirmation);
router.get('/grats', checkAuth, readAffirmations);

module.exports = router;