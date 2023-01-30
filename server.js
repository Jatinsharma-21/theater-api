import "dotenv/config";
import mongoose from "mongoose";
import app from "./src/app.js";

// always add mongo uri in .env files.
const MONGO_URI = "mongodb://localhost:27017/cinema";
const PORT = process.env.PORT || 6000;

mongoose.connect(MONGO_URI, () => {
    console.log(`mongoose connected.`)  
    app.listen(PORT, ()=>{
        console.log(`server up on http://localhost:${PORT}/`)
    })
})