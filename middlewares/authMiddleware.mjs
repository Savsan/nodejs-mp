import Jwt from 'jsonwebtoken';

export default function webTokenVerify () {
    return function (req, res, next) {
        const token = req.headers['x-access-token'];

        if (token) {
            Jwt.verify(token, 'secret', function (err, decoded) {
                if (err) {
                    return res.status(401).json(err);
                } else {
                    next();
                }
            });
        } else {
            return res.status(500).send('Redirect to login page');
        }
    }
}
