import db from '../database';
import Sequelize from 'sequelize';

const User = db.define('User', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    status: Sequelize.STRING
});

User.sync({force: true}).then(() => {
   return User.create({
       firstName: 'Alex',
       lastName: 'Varabyou',
       username: 'padawan',
       password: '123',
       email: 'padawan@gmail.com',
       status: 'Padawan'
   });
});

User.sync({force: true}).then(() => {
    return User.create({
        firstName: 'Vladislav',
        lastName: 'Kovaliov',
        username: 'jedi',
        password: '1234',
        email: 'jedi@gmail.com',
        status: 'Jedi'
    });
});

export default User;
