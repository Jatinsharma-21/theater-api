import createHttpError from "http-errors";
import { MovieModel } from "../models/movie.js";
import { TheaterModel } from "../models/theater.js";

export const createMovie = async (req, res, next) => {
    const { theater, movie } = req.body;

    try {
        if (!theater || !movie) {
            throw createHttpError(400, "Insufficient credentials");
        }

        const theaterDb = await TheaterModel.findOne({ name: theater }).exec();

        if (!theaterDb) {
            throw createHttpError(404, `Theater ${theater} does not exist.`)
        }

        const createMovie = await MovieModel.create(
            { name: movie, belongTo: theaterDb._id }
        );

        if (!createMovie) {
            throw createHttpError(500, "Unable to create movie");
        } else {
            return res.status(201).json({
                success: true,
                message: "Movie inserted successfully."
            })
        }

    } catch (error) {
        next(error);
    }
}

export const getMovieDetail = async (req, res, next) => {
    try {
        const { movieName } = req.body;

        if (!movieName) {
            throw createHttpError(400, "Movie name is required.");
        }

        const movieDb = await MovieModel.findOne({name: movieName}).exec();

        if (!movieDb) {
            throw createHttpError(404, `Movie with name ${movieName} not found.`)
        }
        console.log(`belong to ${movieDb.belongTo}`)
        return res.status(200).json({success: true, message: movieDb});
    } catch (error) {
        next (error);
    }
}