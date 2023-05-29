require('dotenv').config()
const mongoose = require('mongoose')
const schemas = require('./schema')

const _connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI || `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
}

export const getModels = async () => {
    await _connect()
    return {
        User: schemas.userModel(),
        Admin: schemas.adminModel(),
    }
}