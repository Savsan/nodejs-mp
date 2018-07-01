import express from 'express';
import session from 'express-session';
import db from './database';
import passport from 'passport';
import { webTokenVerify, setSomeCookies, cookieParser, queryParser } from './middlewares'
import bodyParser from 'body-parser';
import { authRouter, googleAuthRouter, facebookAuthRouter,
        twitterAuthRouter, productRouter, userRouter } from './routes';

db.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const app = express();

app.use(passport.initialize());
app.use(passport.session());

app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(setSomeCookies());
app.use(cookieParser());
app.use(queryParser());

app.use('/auth',
    authRouter,
    googleAuthRouter,
    facebookAuthRouter,
    twitterAuthRouter
);
// webTokenVerify(),
app.use('/api',
    productRouter,
    userRouter
);

export default app;
