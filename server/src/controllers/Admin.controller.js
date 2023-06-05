const Authenticator = require('./Authenticator.controller');
const routes = require('../config/route_config');
const getService = require('../utils/service_factory');

class AdminController extends Authenticator {
    constructor(token_duration = 3) {
        const service = getService(routes.ADMIN_ROUTE);
        super('admin-access-token', service, token_duration);
    }
}

module.exports = AdminController;