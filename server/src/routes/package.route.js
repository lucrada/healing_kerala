const routes = require('../config/route_config');
const router = require('express').Router();
const getController = require('../utils/controller_factory');
const getTokenValidator = require('../utils/token_validator.factory');

const controller = getController(routes.PACKAGE_ROUTE);
const tokenValidator = getTokenValidator(routes.USER_ROUTE);

router.get('/', controller.getAllPackages);
router.get('/ortho', (req, res) => controller.getPackage(req, res, 'ortho'));
router.get('/cardio', (req, res) => controller.getPackage(req, res, 'cardio'));
router.get('/cancer', (req, res) => controller.getPackage(req, res, 'cancer'));
router.get('/neuro', (req, res) => controller.getPackage(req, res, 'neuro'));
router.get('/ayurved', (req, res) => controller.getPackage(req, res, 'ayurved'));
router.get('/skin', (req, res) => controller.getPackage(req, res, 'skin'));

router.post('/book', tokenValidator.validateToken, controller.addBooking);
router.post('/filtered-packages', tokenValidator.validateToken, controller.getFilteredPackages);
router.post('/add', controller.addPackage);
router.delete('/remove', controller.removePackage);

module.exports = router;