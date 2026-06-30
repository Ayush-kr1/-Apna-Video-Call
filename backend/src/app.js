import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

export default app;