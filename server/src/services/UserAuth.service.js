const AuthService = require("./Authenticator.service");
const { getModels } = require('../config/db_config');

class UserAuthService extends AuthService {
    constructor() {
        const model = getModels.User;
        super(model);
    }
}

module.exports = UserAuthService;