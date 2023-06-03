const routes = require('../config/route_config');
const UserAuthService = require('../controllers/UserAuth.service');

const getServiceController = (route) => {
    if (route === routes.USER_ROUTE) {
        return new UserAuthService();
    }
}

module.exports = getServiceController;