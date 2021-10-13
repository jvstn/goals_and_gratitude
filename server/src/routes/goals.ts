import { Router } from "express";
import { checkAuth } from "../middlewares/auth";
import { createGoal, readGoals } from "../controllers/goals";

const router = Router();

router.post("/goals", checkAuth, createGoal);
router.get("/goals", checkAuth, readGoals);
// router.put("/goals", updateGoal);
// router.delete("/goals", deleteGoal);

module.exports = router;
