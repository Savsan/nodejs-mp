import Sequelize from "sequelize";

const db = new Sequelize('postgres://postgres:admin@localhost:5432/nodejs_mp_db');

export default db;