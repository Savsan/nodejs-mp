import passport from 'passport';
import TwitterAuth from 'passport-twitter';
import clientTwitter from '../../config/auth/client-twitter';

const strategyCallback = function (accessToken, refreshToken, profile, done) {
    return done(null, profile.id);
};

const passportTwitterStrategy = passport.use('twitter', new TwitterAuth.Strategy({
    consumerKey: clientTwitter.web.twitter_consumer_key,
    consumerSecret: clientTwitter.web.twitter_consumer_secret,
    callbackURL: clientTwitter.web.redirect_uris[0]
}, strategyCallback));

export default passportTwitterStrategy;
