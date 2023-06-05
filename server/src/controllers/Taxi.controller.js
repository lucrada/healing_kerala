const Authenticator = require('./Authenticator.controller');
const routes = require('../config/route_config');
const getService = require('../utils/service_factory');

class TaxiController extends Authenticator {
    constructor(token_duration = 14) {
        const service = getService(routes.TAXI_ROUTE);
        super('taxi-access-token', service, token_duration);
    }
}

module.exports = TaxiController;