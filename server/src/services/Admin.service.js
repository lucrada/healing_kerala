const AuthService = require("./Authenticator.service");
const { getModels } = require('../config/db_config');

class AdminService extends AuthService {
    constructor() {
        const models = getModels();
        super(models.Admin);
    }
}

module.exports = AdminService;