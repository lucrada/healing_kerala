const { loginController, authStatusController, registerController, deleteController, logoutController, userDataController } = require('../controllers/user.controller');
const { validateUserToken } = require('../middlewares/user.middleware');

const router = require('express').Router();

router.get('/', validateUserToken, userDataController);
router.get('/isLoggedIn', validateUserToken, authStatusController);

router.post('/login', validateUserToken, loginController);
router.post('/register', validateUserToken, registerController);
router.post('/logout', validateUserToken, logoutController);

router.delete('/delete', validateUserToken, deleteController);

module.exports = router;