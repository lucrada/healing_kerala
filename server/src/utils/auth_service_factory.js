const routes = require('../config/route_config');
const UserAuthService = require('../services/UserAuth.service');

const getService = (route) => {
    if (route === routes.USER_ROUTE) {
        return new UserAuthService();
    }
    return null;
}

module.exports = getService;