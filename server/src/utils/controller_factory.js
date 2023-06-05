const routes = require('../config/route_config');
const UserController = require('../controllers/User.controller');
const AdminController = require('../controllers/Admin.controller');
const TaxiController = require('../controllers/Taxi.controller');
const DoctorController = require('../controllers/Doctor.controller');
const HotelController = require('../controllers/Hotel.controller');

const getController = (route) => {
    if (route === routes.USER_ROUTE) {
        return new UserController();
    }
    if (route === routes.ADMIN_ROUTE) {
        return new AdminController();
    }
    if (route === routes.TAXI_ROUTE) {
        return new TaxiController();
    }
    if (route === routes.DOCTOR_ROUTE) {
        return new DoctorController();
    }
    if (route === routes.HOTEL_ROUTE) {
        return new HotelController();
    }
    return null;
}

module.exports = getController;