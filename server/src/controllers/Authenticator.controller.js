const { daysToMilliSeconds, responseMessage } = require('../utils/util');
const bcrypt = require('bcrypt');

class Authenticator {
    constructor(token_type, service, token_duration) {
        self.token_type = token_type;
        self.service = service;
        self.token_duration = token_duration;
    }

    loginController = async (req, res) => {
        if (req.authenticated) {
            responseMessage(res, 500, 'ALREADY_LOGGED_IN');
            return;
        }
        const credentials = req.body.credentials;
        if (!await service.usernameExists(credentials.username)) {
            responseMessage(res, 500, 'USERNAME_DOES_NOT_EXIST');
            return;
        }
        if (!await service.validateCredential(credentials)) {
            responseMessage(res, 500, 'INCORRECT_PASSWORD');
            return;
        }
        const member = await service.getMember(credentials.username);
        if (member == null) {
            responseMessage(res, 500, 'LOGIN_FAILED');
            return;
        }
        const token = createMemberToken(member);
        res.cookie(token_type, token, {
            maxAge: daysToMilliSeconds(token_duration),
            httpOnly: true,
        });
        responseMessage(res, 200, 'LOGGED_IN');
    }

    registerController = async (req, res) => {
        if (req.authenticated) {
            responseMessage(res, 500, 'ALREADY_LOGGED_IN');
            return;
        }
        const member = req.body.member;
        if (await service.usernameExists(member.username)) {
            responseMessage(res, 500, 'USERNAME_ALREADY_EXISTS');
            return;
        }
        const hashed_password = await bcrypt.hash(member.password, 10);
        if (await service.addMember(member, hashed_password)) {
            const token = service.createMemberToken(await service.getMember(member.username));
            res.cookie(token_type, token, {
                maxAge: daysToMilliSeconds(token_duration),
                httpOnly: true,
            })
            responseMessage(res, 200, 'REG_SUCCESS');
            return;
        }
        responseMessage(res, 500, 'REG_FAILED');
    }

    deleteController = async (req, res) => {
        if (!req.authenticated) {
            responseMessage(res, 500, 'NOT_AUTHENTICATED');
            return
        }
        const decoded_token = verify(req.cookies[token_type], process.env.SECRET_KEY);
        if (await service.removeMember(decoded_token.id)) {
            res.clearCookie(token_type);
            responseMessage(res, 200, 'REMOVED_SUCCESSFULLY');
            return
        }
        responseMessage(res, 500, 'REMOVAL_FAILED');
    }

    getIdController = (req, res) => {
        if (!req.authenticated) {
            responseMessage(res, 500, 'NOT_AUTHENTICATED');
            return
        }
        const decoded_token = verify(req.cookies[token_type], process.env.SECRET_KEY);
        responseMessage(res, 200, decoded_token.id);
    }

    memberDataController = async (req, res) => {
        if (!req.authenticated) {
            responseMessage(res, 500, 'NOT_AUTHENTICATED');
            return;
        }
        const decoded_token = verify(req.cookies[token_type], process.env.SECRET_KEY);
        const memberData = await service.getMemberData(decoded_token.id);
        if (memberData == null) {
            responseMessage(res, 500, 'FETCHING_FAILED');
            return;
        }
        responseMessage(res, 200, memberData);
    }

    logoutController = async (req, res) => {
        if (!req.authenticated) {
            responseMessage(res, 500, 'ALREADY_LOGGED_OUT');
            return
        }
        res.clearCookie(token_type);
        responseMessage(res, 200, 'LOGGED_OUT');
    }

    authStatusController = (req, res) => {
        responseMessage(res, 200, req.authenticated ? 'LOGGED_IN' : 'LOGGED_OUT');
    }
}

module.exports = Authenticator;