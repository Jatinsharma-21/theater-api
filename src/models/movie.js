import { model, Schema } from "mongoose";

const movieSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },

    belongTo: {
        type: Schema.Types.ObjectId,
        required: true
    },
})

export const MovieModel = model("Movie", movieSchema);
