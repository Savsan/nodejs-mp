import express from "express";
import { TwitterAuthController } from '../controllers';
import passportTwitterStrategy from "../middlewares/passport/passportTwitterMiddleware";

const twitterAuthRouter = express.Router();
const twitterAuthController = new TwitterAuthController();

twitterAuthRouter.get('/twitter',
    passportTwitterStrategy.authenticate('twitter'));

twitterAuthRouter.get('/twitter/callback',
    passportTwitterStrategy.authenticate('twitter', {
        failureRedirect: '/login'
    }),
    (req, res) => twitterAuthController.authSuccess(req, res)
);

export default twitterAuthRouter;
