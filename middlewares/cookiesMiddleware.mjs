import cookie from 'cookie';

export default function cookieParser () {
    return function (req, res, next) {
        const cookies = req.headers.cookie || null;

        if (cookies) {
            req.parsedCookies = cookie.parse(cookies);
        }

        next();
    }
}
