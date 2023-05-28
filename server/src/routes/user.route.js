const { loginController, AuthStatusController, registerController, deleteController } = require('../controller/user.controller');
const { validateToken } = require('../middlewares/user.middleware');

const router = require('express').Router();

router.get('/login', validateToken, loginController);
router.get('/isLoggedIn', validateToken, AuthStatusController);

router.post('/register', validateToken, registerController);

router.delete('/delete/:id', deleteController);

module.exports = router;