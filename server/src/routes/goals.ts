import { Router } from "express";
import { createGoal, readGoals } from "../controllers/goals";

const router = Router();

router.post("/goals", createGoal);
router.get("/goals", readGoals);
// router.put("/goals", updateGoal);
// router.delete("/goals", deleteGoal);

module.exports = router;
