import { Router } from "express";
import { createGoal } from "../controllers/goals";

const router = Router();

router.post("/goals", createGoal);
// router.get("/goals", readGoal);
// router.put("/goals", updateGoal);
// router.delete("/goals", deleteGoal);

module.exports = router;
