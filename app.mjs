import express from 'express';
import { setSomeCookies, cookieParser, queryParser } from './middlewares'
import bodyParser from 'body-parser';
import { productRouter, userRouter } from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(setSomeCookies());
app.use(cookieParser());
app.use(queryParser());

app.use('/api',
    productRouter,
    userRouter
);

export default app;