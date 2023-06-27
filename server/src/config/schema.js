const mongoose = require('mongoose');

const schemas = {
    USER: {
        first_name: String,
        last_name: String,
        username: String,
        email: String,
        password: String,
        phone: String,
        gender: String,
        country: String,
    },
    ADMIN: {
        first_name: String,
        last_name: String,
        username: String,
        email: String,
        password: String,
        phone: String,
        gender: String,
        country: String,
    },
    DOCTOR: {
        first_name: String,
        last_name: String,
        username: String,
        email: String,
        password: String,
        phone: String,
        gender: String,
        country: String,
    },
    TAXI: {
        first_name: String,
        last_name: String,
        username: String,
        email: String,
        password: String,
        phone: String,
        gender: String,
        country: String,
    },
    HOTEL: {
        first_name: String,
        last_name: String,
        username: String,
        email: String,
        password: String,
        phone: String,
        gender: String,
        country: String,
    },
    PACKAGE: {
        name: String,
        speciality: String,
        hospital: String,
        duration: String,
        hotel: String,
        extra: String,
        price: String,
        backbg: String,
        picture: String
    },
};

const userModel = mongoose.model('User', mongoose.Schema(schemas.USER));
const adminModel = mongoose.model('Admin', mongoose.Schema(schemas.ADMIN));
const hotelModel = mongoose.model('Hotel', mongoose.Schema(schemas.HOTEL));
const taxiModel = mongoose.model('Taxi', mongoose.Schema(schemas.TAXI));
const doctorModel = mongoose.model('Doctor', mongoose.Schema(schemas.DOCTOR));
const packageModel = mongoose.model('Package', mongoose.Schema(schemas.PACKAGE));

module.exports = { schemas, userModel, adminModel, hotelModel, taxiModel, doctorModel, packageModel };