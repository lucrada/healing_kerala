const mongoose = require('mongoose')

const userModel = () => {
    const userSchema = mongoose.Schema({
        first_name: String,
        last_name: String,
        username: String,
        email: String,
        password: String,
        phone: String,
        gender: String,
        country: String,
    });
    return mongoose.model('User', userSchema);
};

const adminModel = () => {
    const adminSchema = mongoose.Schema({
        first_name: String,
        second_name: String,
        username: String,
        email: String,
        password: String,
    });
    return mongoose.model('Admin', adminSchema);
};

module.exports = { userModel, adminModel };