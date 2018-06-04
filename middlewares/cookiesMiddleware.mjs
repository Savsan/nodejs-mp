import cookie from 'cookie';

function setSomeCookies () {
    return function (req, res, next) {
        const cookies = req.parsedCookies;

        if (!cookies) {
            res.cookie('someCookie', 100, {maxAge: 900000, httpOnly: true});
        }

        next();
    }
}

function cookieParser () {
    return function (req, res, next) {
        const cookies = req.headers.cookie || null;

        if (cookies) {
            req.parsedCookies = cookie.parse(cookies);
        }

        next();
    }
}

export { setSomeCookies, cookieParser };