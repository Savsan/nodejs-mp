import User from "../models/userModel";

export default class UserController {
    getAllUsers (req, res) {
        User.find({}, function(err, users) {
            if (err) {
                res.status(500).send({error: err});
            }

            if (!users.length) {
                res.status(404).send({message: 'No users in the database.'});
            } else {
                res.status(200).json(users);
            }

        });
    }
}
