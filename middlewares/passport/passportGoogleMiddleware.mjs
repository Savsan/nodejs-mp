import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth';
import clientGoogle from '../../config/auth/client-google';

const strategyCallback = function (accessToken, refreshToken, profile, done) {
    return done(null, profile.id);
};

const passportGoogleStrategy = passport.use('google', new GoogleStrategy.OAuth2Strategy({
    clientID: clientGoogle.web.client_id,
    clientSecret: clientGoogle.web.client_secret,
    callbackURL: clientGoogle.web.redirect_uris[0]
}, strategyCallback));

export default passportGoogleStrategy;
