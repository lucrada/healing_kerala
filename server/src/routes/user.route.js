const { validateUserToken } = require('../middlewares/user.middleware');
const routes = require('../config/route_config');
const router = require('express').Router();
const getAuthController = require('../utils/auth_controller_factory');

const controller = getAuthController(routes.USER_ROUTE);

router.get('/', validateUserToken, controller.memberDataController);
router.get('/isLoggedIn', validateUserToken, controller.authStatusController);

router.post('/login', validateUserToken, controller.loginController);
router.post('/register', validateUserToken, controller.registerController);
router.post('/logout', validateUserToken, controller.logoutController);

router.delete('/delete', validateUserToken, controller.deleteController);

module.exports = router;