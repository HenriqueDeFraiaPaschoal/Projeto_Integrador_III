import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

// ROTAS DA APLICAÇÃO BACK-END

import userRoute from './routes/user.js';
app.use('/user', userRoute);

import postRoute from './routes/post.js';
app.use('/', postRoute);

export default app;