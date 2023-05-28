const bcrypt = require('bcrypt');
const { verify } = require('jsonwebtoken');
const { daysToMilliSeconds, responseMessage } = require('../utils/util');

export const loginController = async (req, res) => {
    if (req.authenticated) {
        responseMessage(res, 500, 'ALREADY_LOGGED_IN');
        return;
    }
    const credentials = req.body.credentials;
    if (!await usernameExists(credentials.username)) {
        responseMessage(res, 500, 'USERNAME_DOES_NOT_EXIST');
        return;
    }
    if (!await validateUser(credentials)) {
        responseMessage(res, 500, 'INCORRECT_PASSWORD');
        return;
    }
    const token = createUserToken(await getUser(credentials.username));
    res.cookie("user-access-token", token, {
        maxAge: daysToMilliSeconds(3),
        httpOnly: true,
    });
    responseMessage(res, 200, 'LOGGED_IN');
}

export const registerController = async (req, res) => {
    if (req.authenticated) {
        responseMessage(res, 500, 'ALREADY_LOGGED_IN');
        return;
    }
    const user = req.user;
    if (await usernameExists(user.username)) {
        responseMessage(res, 500, 'USERNAME_ALREADY_EXISTS');
        return;
    }
    const hashed_password = await bcrypt.hash(user.password, 10);
    if (await addUser(user, hashed_password)) {
        const token = createAdminToken(await getUser(username))
        res.cookie("user-access-token", access_token, {
            maxAge: daysToMilliSeconds(3),
            httpOnly: true,
        })
        responseMessage(res, 200, 'ADMIN_REG_SUCCESS');
        return;
    }
    responseMessage(res, 500, 'ADMIN_REG_FAILED');
}

export const deleteController = async (req, res) => {
    if (!req.authenticated) {
        responseMessage(res, 500, 'NOT_AUTHENTICATED');
        return
    }
    const decoded_token = verify(req.cookies["user-access-token"], process.env.SECRET_KEY)
    if (await removeUser(decoded_token.id)) {
        res.clearCookie("user-access-token")
        responseMessage(res, 200, 'USER_REMOVED_SUCCESSFULLY');
        return
    }
    responseMessage(res, 500, 'USER_REMOVAL_FAILED');
}

export const dataController = async (req, res) => {
    if (!req.authenticated) {
        responseMessage(res, 500, 'NOT_AUTHENTICATED');
        return
    }
    const decoded_token = verify(req.cookies["user-access-token"], process.env.SECRET_KEY)
    responseMessage(res, 200, { id: decoded_token.id });
}

export const logoutController = async (req, res) => {
    if (!req.authenticated) {
        responseMessage(res, 500, 'ALREADY_LOGGED_OUT');
        return
    }
    res.clearCookie("user-access-token")
    responseMessage(res, 200, 'LOGGED_OUT');
}

export const authStatusController = (req, res) => {
    responseMessage(res, 200, req.authenticated ? 'LOGGED_IN' : 'LOGGED_OUT');
}