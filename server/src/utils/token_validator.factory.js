const routes = require('../config/route_config');
const UserTokenValidator = require('../middlewares/UserTokenValidator.middleware');
const AdminTokenValidator = require('../middlewares/AdminTokenValidator.middleware');
const HotelTokenValidator = require('../middlewares/HotelTokenValidator.middleware');
const TaxiTokenValidator = require('../middlewares/TaxiTokenValidator.middleware');
const DoctorTokenValidator = require('../middlewares/DoctorTokenValidator.middleware');

const getTokenValidator = (route) => {
    if (route === routes.USER_ROUTE) {
        return new UserTokenValidator();
    }
    if (route === routes.ADMIN_ROUTE) {
        return new AdminTokenValidator();
    }
    if (route === routes.HOTEL_ROUTE) {
        return new HotelTokenValidator();
    }
    if (route === routes.TAXI_ROUTE) {
        return new TaxiTokenValidator();
    }
    if (route === routes.DOCTOR_ROUTE) {
        return new DoctorTokenValidator();
    }
    return null;
}

module.exports = getTokenValidator;