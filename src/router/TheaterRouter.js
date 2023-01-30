import { Router } from "express";
import { createTheater, getAllTheaters } from "../controllers/theaterController.js";

const theaterRouter = Router();

theaterRouter.post("/create", createTheater);

theaterRouter.get("/all", getAllTheaters);

export default theaterRouter;