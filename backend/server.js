import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const dbUser = process.env.MONGODB_USER;

const dbPass = process.env.MONGODB_PASS;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

const dbURL = `mongodb+srv://${dbUser}:${dbPass}@cluster0.5uztl07.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(dbURL);
