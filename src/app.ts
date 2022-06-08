import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "reflect-metadata";
import "express-async-errors";
import mongo from "./database/mongo";
import { router } from "./routes/routes";

const app = express();

mongo.connect();

dotenv.config();
app.use(express.json());
app.use(router);
app.use(cors());

export default app;