import mongoose from 'mongoose';

const db = mongoose.connect('mongodb://localhost:27017/nodejs-test-db');

export default db;