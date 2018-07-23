import express from 'express';
import session from 'express-session';
import db from './database';
import { cookieParser, queryParser } from './middlewares'
import sessionConfig from './config/sessionConfig';
import { productRouter, userRouter, cityRouter } from './routes';
import SwaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerDoc = YAML.load('./swagger/swagger.yaml');

db.then(
    () => { console.log('Connection to the database has been established successfully.') },
    err => { console.error('Unable to connect to the database:', err); }
);

const app = express();

app.use(session(sessionConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(queryParser());

app.use('/api',
    productRouter,
    userRouter,
    cityRouter
);

app.use('/api/docs', SwaggerUI.serve, SwaggerUI.setup(swaggerDoc));

export default app;
