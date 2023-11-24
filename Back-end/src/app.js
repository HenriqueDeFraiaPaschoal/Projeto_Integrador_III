import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from 'cors'

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

// ROTAS DA APLICAÇÃO BACK-END

import userRoute from './routes/user.js';
app.use('/', userRoute);

import postRoute from './routes/post.js';
app.use('/', postRoute);

export default app;