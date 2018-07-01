import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { webTokenVerify, setSomeCookies, cookieParser, queryParser } from './middlewares'
import bodyParser from 'body-parser';
import { authRouter, googleAuthRouter, facebookAuthRouter,
        twitterAuthRouter, productRouter, userRouter } from './routes';

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

app.use('/api', webTokenVerify(),
    productRouter,
    userRouter
);

export default app;