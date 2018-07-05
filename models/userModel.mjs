import mongoose from 'mongoose';

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

User.create({
    firstName: 'Alex',
    lastName: 'Varabyou',
    username: 'padawan',
    password: '123',
    email: 'padawan@gmail.com',
    status: 'Padawan'
}, function (err, user) {
    if (err) {
        console.error(err);
    } else {
        console.log(`User ${user.firstName} has been added to database.`)
    }
});

User.create({
    firstName: 'Vladislav',
    lastName: 'Kovaliov',
    username: 'jedi',
    password: '1234',
    email: 'jedi@gmail.com',
    status: 'Jedi'
}, function (err, user) {
    if (err) {
        console.error(err);
    } else {
        console.log(`User ${user.firstName} has been added to database.`)
    }
});

export default User;