import express from 'express';
import { setSomeCookies, cookieParser } from './middlewares'
import bodyParser from 'body-parser';
// import queryString from 'query-string';
import { productRouter, userRouter } from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(setSomeCookies());
app.use(cookieParser());

app.use((req, res, next) => {
    req.parsedQuery = JSON.stringify(req.query);
    next();
});

app.use('/api',
    productRouter,
    userRouter
);

export default app;