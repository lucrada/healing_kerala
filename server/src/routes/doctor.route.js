const routes = require('../config/route_config');
const router = require('express').Router();
const getController = require('../utils/controller_factory');
const getTokenValidator = require('../utils/token_validator.factory');

const controller = getController(routes.DOCTOR_ROUTE);
const tokenValidator = getTokenValidator(routes.DOCTOR_ROUTE);

router.get('/', tokenValidator.validateToken, controller.memberDataController);
router.get('/isLoggedIn', tokenValidator.validateToken, controller.authStatusController);

router.post('/login', tokenValidator.validateToken, controller.loginController);
router.post('/register', tokenValidator.validateToken, controller.registerController);
router.post('/logout', tokenValidator.validateToken, controller.logoutController);

router.delete('/delete', tokenValidator.validateToken, controller.deleteController);

module.exports = router;