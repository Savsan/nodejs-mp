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

    deleteUserById (req, res) {
        const id = req.params.id;

        User.findOneAndDelete(id, function(err, user) {
            if (err) {
                res.status(500).send({error: err});
            } else {
                if (!user) {
                    res.status(404).send({message: `User with id: ${id} doesn't exists in the database.`});
                } else {
                    console.log(`User: ${user.firstName} has been deleted from the database.`);
                    res.status(200).json([user]);
                }
            }
        });
    }
}
