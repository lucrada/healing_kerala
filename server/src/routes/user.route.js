const { loginController, authStatusController, registerController, deleteController, logoutController, dataController } = require('../controller/user.controller');
const { validateToken } = require('../middlewares/user.middleware');

const router = require('express').Router();

router.get('/', validateToken, dataController);
router.get('/isLoggedIn', validateToken, authStatusController);

router.post('/login', validateToken, loginController);
router.post('/register', validateToken, registerController);
router.post('/logout', validateToken, logoutController);

router.delete('/delete/:id', validateToken, deleteController);

module.exports = router;