const Authenticator = require('./Authenticator.controller');
const routes = require('../config/route_config');
const getService = require('../utils/service_factory');

class HotelController extends Authenticator {
    constructor(token_duration = 3) {
        const service = getService(routes.HOTEL_ROUTE);
        super('hotel-access-token', service, token_duration);
    }
}

module.exports = HotelController;