require('dotenv').config();
const mongoose = require('mongoose');
const { userModel, adminModel, hotelModel, taxiModel, doctorModel, packageModel, bookingsModel } = require('./schema');

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
        console.log('connected to database');
    } catch (err) {
        console.log(err);
    }
}

const getModels = () => {
    return {
        User: userModel,
        Admin: adminModel,
        Hotel: hotelModel,
        Taxi: taxiModel,
        Doctor: doctorModel,
        Package: packageModel,
        Bookings: bookingsModel,
    }
}

module.exports = { getModels, connect };