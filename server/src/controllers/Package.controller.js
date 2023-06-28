const { responseMessage } = require('../utils/util');
const getService = require('../utils/service_factory');
const routes = require('../config/route_config');
const UserController = require('./User.controller');

class PackageController {
    constructor() {
        this.service = getService(routes.PACKAGE_ROUTE);
    }

    getAllPackages = async (_, res) => {
        try {
            const packages = await this.service.fetchPackages('*');
            responseMessage(res, 200, packages);
        } catch (e) {
            console.log(e);
            responseMessage(res, 500, null);
        }
    }

    getPackage = async (_, res, package_) => {
        try {
            const packages = await this.service.fetchPackages(package_);
            responseMessage(res, 200, packages);
        } catch (e) {
            console.log(e);
            responseMessage(res, 500, null);
        }
    }

    getFilteredPackages = async (req, res) => {
        try {
            if (!req.authenticated) {
                responseMessage(res, 500, 'NOT_AUTHENTICATED');
                return;
            }
            let userController = new UserController();
            const id = userController.getId(req, res);
            const packages_ = await this.service.getPackagesWithUserId(id, req.body.type);
            responseMessage(res, 200, packages_);
        } catch (e) {
            console.log(e);
            responseMessage(res, 500, 'FAILED_TO_FETCH_PACKAGES');
        }
    }

    addPackage = async (req, res) => {
        try {
            const package_ = req.body.package;
            if (await this.service.addNewPackage(package_)) {
                responseMessage(res, 200, 'PACKAGE_ADDED');
                return;
            }
            responseMessage(res, 500, 'FAILED_TO_ADD_PACKAGE');
        } catch (e) {
            console.log(e);
            responseMessage(res, 500, 'FAILED_TO_ADD_PACKAGE');
        }
    }

    addBooking = async (req, res) => {
        try {
            if (!req.authenticated) {
                responseMessage(res, 500, 'NOT_AUTHENTICATED');
                return;
            }
            let userController = new UserController();
            const id = userController.getId(req, res);
            const packageId = req.body.packageId;
            if (await this.service.bookPackage(id, packageId)) {
                responseMessage(res, 200, 'PACKAGE_BOOKED');
                return;
            }
            responseMessage(res, 500, 'BOOKING_FAILED');
        } catch (e) {
            console.log(e);
            responseMessage(res, 500, 'BOOKING_FAILED');
        }
    }

    removePackage = async (req, res) => {
        try {
            const packageId = req.body.packageId;
            if (await this.service.removePackageWithId(packageId)) {
                responseMessage(res, 200, 'PACKAGE_REMOVED');
                return;
            }
            responseMessage(res, 500, 'PACKAGE_REMOVAL_FAILED');
        } catch (e) {
            console.log(e);
            responseMessage(res, 500, 'PACKAGE_REMOVAL_FAILED');
        }
    }
}

module.exports = PackageController;