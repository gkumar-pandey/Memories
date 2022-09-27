import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());
