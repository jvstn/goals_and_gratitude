import { Router } from "express";
import { checkAuth } from "../middlewares/auth";
import { createGoal, readGoals, updateGoal } from "../controllers/goals";

const router = Router();

router.post("/goals", checkAuth, createGoal);
router.get("/goals", checkAuth, readGoals);
router.put("/goals", checkAuth, updateGoal);
// router.delete("/goals", deleteGoal);

module.exports = router;
