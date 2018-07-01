import express from 'express';
import { FacebookAuthController } from '../controllers';
import passportFacebookStrategy from '../middlewares/passport/passportFacebookMiddleware';

const facebookAuthRouter = express.Router();
const facebookAuthController = new FacebookAuthController();

facebookAuthRouter.get('/facebook',
    passportFacebookStrategy.authenticate('facebook'));

facebookAuthRouter.get('/facebook/callback',
    passportFacebookStrategy.authenticate('facebook', {
        failureRedirect: '/login'
    }),
    (req, res) => facebookAuthController.authSuccess(req, res)
);

export default facebookAuthRouter;
