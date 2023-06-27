const { getModels } = require('../config/db_config');

class PackageService {
    constructor() {
        const models = getModels();
        this.model = models.Package;
    }

    fetchPackages = async (package) => {
        try {
            if (package === '*') {
                const packages = await this.model.find().toArray();
                return packages;
            } else {
                const packages = await this.model.find({ speciality: package }).toArray();
                return packages;
            }
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    addNewPackage = async (package) => {
        try {
            const newPackage = new this.model(package);
            await newPackage.save();
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    removePackageWithId = async (id) => {
        try {
            const removedPackage = await this.model.findByIdAndRemove(id);
            if (removedPackage) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}

module.exports = PackageService;