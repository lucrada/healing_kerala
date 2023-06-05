const Authenticator = require('./Authenticator.controller');
const routes = require('../config/route_config');
const getService = require('../utils/service_factory');

class DoctorController extends Authenticator {
    constructor(token_duration = 3) {
        const service = getService(routes.DOCTOR_ROUTE);
        super('doctor-access-token', service, token_duration);
    }
}

module.exports = DoctorController;