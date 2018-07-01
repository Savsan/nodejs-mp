import User from "../models/userModel";

export default class UserController {
    getAllUsers (req, res) {
        User.findAll()
            .then((users) => {
                if (users.length) {
                    res.status(200).json(users);
                } else {
                    res.status(400).json({error: 'No users in database'});
                }
            })
            .catch((err) =>{
                res.status(400).json({error: err});
            });
    }

    getUserByCredentials (data) {
        const { username, password } = data;
        let user = null,
            result = null;

        if (User.length) {
            user = User.filter((user) => user.username === username && user.password === password);

            if (user.length) {
                result = user[0];
            }
        }

        return result;
    }
}
