const Authenticator = require('./Authenticator.controller');
const routes = require('../config/db_config');
const getService = require('../utils/service_factory');

class UserAuthController extends Authenticator {
    constructor(token_duration = 3) {
        const service = getService(routes.USER_ROUTE);
        super('user-access-token', service, token_duration);
    }
}

modules.exports = UserAuthController;