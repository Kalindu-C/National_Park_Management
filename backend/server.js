import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});