import { Router } from 'express'
import { createAffirmation, readAffirmations, updateAffirmation } from '../controllers/affirmations';
import { checkAuth } from '../middlewares/auth';


const router = Router();

router.post('/grats', checkAuth, createAffirmation);
router.get('/grats', checkAuth, readAffirmations);
router.put('/grats', checkAuth, updateAffirmation);

module.exports = router;