import Jwt from 'jsonwebtoken';
import UserController from './userController';

export default class AuthController extends UserController {
    verifyUser (req, res) {
        const user = this.getUserByCredentials(req.body);
        let payload = {},
            token = null,
            result = null;

        if (!user) {
            return res.status(401).json({
                "code": 404,
                "message": "Not Found",
                "data": {}
            });
        } else {
            token = Jwt.sign(payload, 'secret', { expiresIn: Math.floor(new Date().getTime()/1000) + 3600 });
            result = {
                "code": 200,
                "message": "OK",
                "data": {
                    "user": {
                        "email": user.email,
                        "username": user.firstName
                    }
                },
                token
            }
        }

        return res.json(result);
    }
}
