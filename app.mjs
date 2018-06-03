import express from 'express';
import cookieParser from "cookie-parser";
import queryString from 'query-string';
import { productRouter, userRouter } from './routes';

const app = express();
app.use(cookieParser());

app.use((req, res, next) => {
    req.parsedQuery = req.query;
    next();
});

app.use('/api',
    productRouter,
    userRouter
);

export default app;