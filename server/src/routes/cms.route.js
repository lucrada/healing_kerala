const express = require("express");
const router = express.Router();
const routes = require('../config/route_config');

router.get("/", (_, res) => {
    res.send("Content Management System");
});

router.use(routes.USER_ROUTE, require("./user.route"));
router.use(routes.HOTEL_ROUTE, require("./hotel.route"));
router.use(routes.DOCTOR_ROUTE, require("./doctor.route"));
router.use(routes.TAXI_ROUTE, require("./taxi.route"));
router.use(routes.ADMIN_ROUTE, require("./admin.route"));
router.use(routes.PACKAGE_ROUTE, require("./package.route"));

module.exports = router;