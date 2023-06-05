const AuthService = require("./Authenticator.service");
const { getModels } = require('../config/db_config');

class HotelService extends AuthService {
    constructor() {
        const models = getModels();
        super(models.Hotel);
    }
}

module.exports = HotelService;