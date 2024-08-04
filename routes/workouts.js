import express from "express";
import Workout from "../models/WorkoutModels.js"; // Ensure the file extension is included

import {
  CreateWorkout,
  GetWorkouts,
  GetWorkout,
  DeleteWorkout,
  UpdateWorkout,
} from "../controller/WorkoutController.js";

const router = express.Router();

//GET all workout
router.get("/", GetWorkouts);

//GET single workout
router.get("/:id", GetWorkout);

//POST a new workout

router.post("/", CreateWorkout);

//DELETE
router.delete("/:id", DeleteWorkout);

//UPDATE
router.patch("/:id", UpdateWorkout);

export default router;
