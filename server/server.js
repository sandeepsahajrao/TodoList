

import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import router from "./router/index.js";
import connectToDatabase from "./db/dbConnection.js";
import { APP_PORT } from './config/index.js';
const app = express();
// const PORT = 5000;

app.use(express.json());
dotenv.config()

app.use(cors());

app.use(router);

connectToDatabase();

app.listen(APP_PORT, () => {
  console.log(`Listening on port ${APP_PORT}`);
});
