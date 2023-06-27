const routes = require('../config/route_config');
const UserService = require('../services/User.service');
const AdminService = require('../services/Admin.service');
const TaxiService = require('../services/Taxi.service');
const DoctorService = require('../services/Doctor.service');
const HotelService = require('../services/Hotel.service');
const PackageService = require('../services/Package.service');

const getService = (route) => {
    if (route === routes.USER_ROUTE) {
        return new UserService();
    }
    if (route === routes.ADMIN_ROUTE) {
        return new AdminService();
    }
    if (route === routes.TAXI_ROUTE) {
        return new TaxiService();
    }
    if (route === routes.DOCTOR_ROUTE) {
        return new DoctorService();
    }
    if (route === routes.HOTEL_ROUTE) {
        return new HotelService();
    }
    if (route === routes.PACKAGE_ROUTE) {
        return new PackageService();
    }
    return null;
}

module.exports = getService;