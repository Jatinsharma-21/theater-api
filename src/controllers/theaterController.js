import createHttpError from "http-errors";
import { TheaterModel } from "../models/theater.js"

export const getAllTheaters = async (req, res, next) => {
    try {
        const theaters = await TheaterModel.find({}).exec();
        return res.status(200).json(theaters);
    } catch (error) {
        next (error);
    }
}

export const createTheater = async (req, res, next) => {
    try {
        const {name} = req.body;
        
        if (!name) {
            throw createHttpError(400, "Name of theater is required.");
        }

        const result = await TheaterModel.create({name: name});
        
        if (!result) {
            throw createHttpError(500, "Unable to create user.");
        } else {
            return res.status(201).json({success: true, message: "Theater created."});
        }
    } catch (error) {
        next (error);
    }
}