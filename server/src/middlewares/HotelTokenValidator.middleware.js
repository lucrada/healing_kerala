const TokenValidator = require('./TokenValidator.middleware');

class HotelTokenValidator extends TokenValidator {
    constructor() {
        super('hotel-access-token');
    }
}

module.exports = HotelTokenValidator;