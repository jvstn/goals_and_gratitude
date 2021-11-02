import { Router } from 'express'
import { createAffirmation, deleteAffirmation, readAffirmations, updateAffirmation } from '../controllers/affirmations';
import { checkAuth } from '../middlewares/auth';


const router = Router();

router.post('/grats', checkAuth, createAffirmation);
router.get('/grats', checkAuth, readAffirmations);
router.put('/grats', checkAuth, updateAffirmation);
router.delete('/grats', checkAuth, deleteAffirmation);

export default router;