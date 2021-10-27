import { Router } from "express";
import { checkAuth } from "../middlewares/auth";
import { createAffirmation, deleteGoal, readGoals, updateGoal } from "../controllers/affirmations";

const router = Router();

router.post("/goals", checkAuth, createAffirmation);
router.get("/goals", checkAuth, readGoals);
router.put("/goals", checkAuth, updateGoal);
router.delete("/goals", checkAuth, deleteGoal);

module.exports = router;
