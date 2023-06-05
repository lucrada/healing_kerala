const AuthService = require("./Authenticator.service");
const { getModels } = require('../config/db_config');

class TaxiService extends AuthService {
    constructor() {
        const models = getModels();
        super(models.Taxi);
    }
}

module.exports = TaxiService;