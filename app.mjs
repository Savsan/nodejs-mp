import express from 'express';
import session from 'express-session';
import db from './database';
import { setSomeCookies, cookieParser, queryParser } from './middlewares'
import bodyParser from 'body-parser';
import { productRouter, userRouter, cityRouter } from './routes';

db.then(
    () => { console.log('Connection to the database has been established successfully.') },
    err => { console.error('Unable to connect to the database:', err); }
);

const app = express();

app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(setSomeCookies());
app.use(cookieParser());
app.use(queryParser());

app.use('/api',
    productRouter,
    userRouter,
    cityRouter
);

export default app;
