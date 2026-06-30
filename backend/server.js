import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import { createServer } from "node:http";

import app from "./src/app.js";
import { connectToSocket } from "./src/controllers/socketManager.js";

const PORT = process.env.PORT || 8000;

const server = createServer(app);

connectToSocket(server);

const start = async () => {
    try {
        const connectionDb = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB Connected: ${connectionDb.connection.host}`);

        server.listen(PORT, () => {
            console.log(`Listening on Port ${PORT}`);
        });

    } catch (error) {
        console.log(error);
    }
};

start();