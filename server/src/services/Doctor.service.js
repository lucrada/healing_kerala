const AuthService = require("./Authenticator.service");
const { getModels } = require('../config/db_config');

class DoctorService extends AuthService {
    constructor() {
        const models = getModels();
        super(models.Doctor);
    }
}

module.exports = DoctorService;