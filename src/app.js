import express from "express";
import createHttpError, { isHttpError } from "http-errors";
import movieRouter from "./router/MovieRouter.js";
import theaterRouter from "./router/TheaterRouter.js";

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use("/theater", theaterRouter);

app.use("/movie", movieRouter);

app.use("/", (req, res, next) => {
    return res.status(404).json({success: false, messsage: "This route does not exist."});
});

app.use((error, req, res, next) => {
    console.error(error);
    let errorMessage = "An unknown error occurred.";
    let statusCode = 500;
  
    if (isHttpError(error)) {
      statusCode = error.status;
      errorMessage = error.message;
    }
    return res.status(statusCode).json({ success: false, message: errorMessage });
  });

export default app;