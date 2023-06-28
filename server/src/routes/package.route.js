const routes = require('../config/route_config');
const router = require('express').Router();
const getController = require('../utils/controller_factory');

const controller = getController(routes.PACKAGE_ROUTE);

router.get('/', controller.getAllPackages);
router.get('/ortho', (req, res) => controller.getPackage(req, res, 'ortho'));
router.get('/cardio', (req, res) => controller.getPackage(req, res, 'cardio'));
router.get('/cancer', (req, res) => controller.getPackage(req, res, 'cancer'));
router.get('/neuro', (req, res) => controller.getPackage(req, res, 'neuro'));
router.get('/ayurved', (req, res) => controller.getPackage(req, res, 'ayurved'));
router.get('/skin', (req, res) => controller.getPackage(req, res, 'skin'));

router.post('/add', controller.addPackage);
router.delete('/remove', controller.removePackage);

module.exports = router;