require('dotenv').config()
const mongoose = require('mongoose')
const { userModel, adminModel } = require('./schema')

const connected = false;
const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI || `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
    connected = true;
}

const getModels = async () => {
    if (connected) {
        return {
            User: userModel(),
            Admin: adminModel(),
        }
    }
    console.log('Not connected to database');
    return null;
}

module.exports = { getModels, connect };