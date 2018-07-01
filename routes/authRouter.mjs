import express from 'express';
import { AuthController } from '../controllers';
import passportLocalStrategy from '../middlewares/passport/passportLocalMiddleware';
import passport from "passport/lib/index";

const authRouter = express.Router();
const authController = new AuthController();

authRouter.post('/local',
    passportLocalStrategy.authenticate('local', { session: false }),
    (req, res) => authController.verifyUser(req, res)
);

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(id, done) {
    debugger;
    done(null, id);
});

export default authRouter;
