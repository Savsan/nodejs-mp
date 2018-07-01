import userModel from "../models/userModel";

export default class UserController {
    getAllUsers (req, res) {
        if (userModel.length) {
            res.status(200).json(userModel);
        } else {
            res.status(400).json({error: 'No users in database'});
        }
    }

    getUserByCredentials (data) {
        const { username, password } = data;
        let user = null,
            result = null;

        if (userModel.length) {
            user = userModel.filter((user) => user.username === username && user.password === password);

            if (user.length) {
                result = user[0];
            }
        }

        return result;
    }
}
