const routes = require('../config/route_config');
const UserAuthController = require('../controllers/UserAuth.controller');

const getAuthController = (route) => {
    if (route === routes.USER_ROUTE) {
        return new UserAuthController();
    }
    return null;
}

module.exports = getAuthController;