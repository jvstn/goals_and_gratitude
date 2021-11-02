import { Router } from "express";
import { checkAuth } from "../middlewares/auth";
import { createAffirmation, deleteAffirmation, readAffirmations, updateAffirmation,  } from "../controllers/affirmations";

const router = Router();

router.post("/goals", checkAuth, createAffirmation);
router.get("/goals", checkAuth, readAffirmations);
router.put("/goals", checkAuth, updateAffirmation);
router.delete("/goals", checkAuth, deleteAffirmation);

export default router;
