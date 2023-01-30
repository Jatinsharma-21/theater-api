import { Router } from "express";
import { createMovie, getMovieDetail } from "../controllers/movieController.js";

const router = Router();

router.post("/create", createMovie);

router.get("/getMovie", getMovieDetail);

export default router;
