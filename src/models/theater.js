import mongoose, { Schema } from "mongoose";

const theaterSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },

    monday: {
        type: [{time: String, movie: Schema.Types.ObjectId}],
    },

    tuesday: {
        type: [{time: String, movie: Schema.Types.ObjectId}],
    },
    
    wednesday: {
        type: [{time: String, movie: Schema.Types.ObjectId}],
    },
    
    thrusday: {
        type: [{time: String, movie: Schema.Types.ObjectId}],
    },
    
    friday: {
        type: [{time: String, movie: Schema.Types.ObjectId}],
    },
    
    saturday: {
        type: [{time: String, movie: Schema.Types.ObjectId}],
    },
    
    sunday: {
        type: [{time: String, movie: Schema.Types.ObjectId}],
    },
    
})

export const TheaterModel = mongoose.model('Theater', theaterSchema);
