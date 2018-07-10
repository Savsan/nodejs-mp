import mongoose from 'mongoose';
import userData from "../config/mock-data/userData";

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        required: true
    },
    created_on: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('Users', UserSchema);

userData.map((user) => User.create(user, function (err, user) {
    if (err) {
        console.trace(err);
    } else {
        console.log(`User ${user.firstName} has been added to database.`);
    }
}));

export default User;
