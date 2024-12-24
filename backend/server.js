import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const port = 3000;

app.use("/", userRoutes);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});