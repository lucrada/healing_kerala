const { verify } = require('jsonwebtoken')

const validateAdminToken = (req, _, next) => {
    if (!req.cookies) {
        req.authenticated = false
        return next()
    }
    const access_token = req.cookies["admin-access-token"]
    if (!access_token) {
        req.authenticated = false
        return next()
    }

    try {
        const valid_token = verify(access_token, process.env.SECRET_KEY)
        if (valid_token) {
            req.authenticated = true
            return next()
        }
    } catch (err) {
        req.authenticated = false
        return next()
    }
}

module.exports = { validateAdminToken }