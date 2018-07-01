import passport from 'passport';
import FacebookAuth from 'passport-facebook';
import clientFacebook from '../../config/auth/client-facebook';

const strategyCallback = function (accessToken, refreshToken, profile, done) {
    return done(null, profile.id);
};

const passportFacebookStrategy = passport.use('facebook', new FacebookAuth.Strategy({
    clientID: clientFacebook.web.facebook_app_id,
    clientSecret: clientFacebook.web.facebook_app_secret,
    callbackURL: clientFacebook.web.redirect_uris[0]
}, strategyCallback));

export default passportFacebookStrategy;
