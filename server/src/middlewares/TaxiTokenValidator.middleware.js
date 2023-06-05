const TokenValidator = require('./TokenValidator.middleware');

class TaxiTokenValidator extends TokenValidator {
    constructor() {
        super('taxi-access-token');
    }
}

module.exports = TaxiTokenValidator;