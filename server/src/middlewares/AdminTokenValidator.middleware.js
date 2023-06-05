const TokenValidator = require('./TokenValidator.middleware');

class AdminTokenValidator extends TokenValidator {
    constructor() {
        super('admin-access-token');
    }
}

module.exports = AdminTokenValidator;