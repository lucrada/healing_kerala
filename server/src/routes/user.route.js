const routes = require('../config/route_config');
const router = require('express').Router();
const getAuthController = require('../utils/auth_controller_factory');
const getTokenValidator = require('../utils/token_validator.factory');

const controller = getAuthController(routes.USER_ROUTE);
const tokenValidator = getTokenValidator(routes.USER_ROUTE);

router.get('/', tokenValidator.validateToken, controller.memberDataController);
router.get('/isLoggedIn', tokenValidator.validateToken, controller.authStatusController);

router.post('/login', tokenValidator.validateToken, controller.loginController);
router.post('/register', tokenValidator.validateToken, controller.registerController);
router.post('/logout', tokenValidator.validateToken, controller.logoutController);

router.delete('/delete', tokenValidator.validateToken, controller.deleteController);

module.exports = router;