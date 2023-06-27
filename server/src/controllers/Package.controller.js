const getService = require('../utils/service_factory');
const { responseMessage } = require('../utils/util');

class PackageController {
    constructor() {
        this.service = getService(routes.PACKAGE_ROUTE);
    }

    getAllPackages = async (_, res) => {
        try {
            const packages = await this.services.fetchPackages('*');
            responseMessage(res, 200, packages);
        } catch (e) {
            console.log(e);
            responseMessage(res, 500, null);
        }
    }

    getPackage = async (_, res, package) => {
        try {
            const packages = await this.services.fetchPackages(package);
            responseMessage(res, 200, packages);
        } catch (e) {
            console.log(e);
            responseMessage(res, 500, null);
        }
    }

    addPackage = async (req, res) => {
        try {
            const package = req.body.package;
            if (await this.service.addNewPackage(package)) {
                responseMessage(res, 200, 'PACKAGE_ADDED');
                return;
            }
            responseMessage(res, 500, 'FAILED_TO_ADD_PACKAGE');
        } catch (e) {
            console.log(e);
            responseMessage(res, 500, 'FAILED_TO_ADD_PACKAGE');
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

module.exports = { PackageController }