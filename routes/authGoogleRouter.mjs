import express from 'express';
import { GoogleAuthController } from '../controllers';
import passportGoogleStrategy from '../middlewares/passport/passportGoogleMiddleware';

const googleAuthRouter = express.Router();
const googleAuthController = new GoogleAuthController();

googleAuthRouter.get('/google',
    passportGoogleStrategy.authenticate('google', { scope: ['profile'] }));

googleAuthRouter.get('/google/callback',
    passportGoogleStrategy.authenticate('google', {
        failureRedirect: '/login'
    }),
    (req, res) => googleAuthController.authSuccess(req, res)
);

export default googleAuthRouter;
