const TokenValidator = require('./TokenValidator.middleware');

class DoctorTokenValidator extends TokenValidator {
    constructor() {
        super('doctor-access-token');
    }
}

module.exports = DoctorTokenValidator;