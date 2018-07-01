import passport from 'passport';
import LocalStrategy from 'passport-local';

import userModel from '../../models/userModel';

const strategyCallback = function (username, password, done) {
    const foundUser = userModel.filter(user => user.username === username && user.password === password);
    let user = null;

    if (foundUser.length) {
        user = foundUser[0];
        return done(null, user);
    } else {
        return done(null, false, { message: 'Incorrect name or password.' });
    }
};

const passportLocalStrategy = passport.use('local', new LocalStrategy({ session: false }, strategyCallback));

export default passportLocalStrategy;
