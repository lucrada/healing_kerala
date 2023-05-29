const bcrypt = require('bcrypt');
const { verify } = require('jsonwebtoken');
const { daysToMilliSeconds, responseMessage } = require('../utils/util');
const { usernameExists, validateUser, createUserToken, getUser, addUser, removeUser, getUserData } = require('../services/user.service');

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
    const user = await getUser(credentials.username);
    if (user == null) {
        responseMessage(res, 500, 'LOGIN_FAILED');
        return;
    }
    const token = createUserToken(user);
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
        const token = createUserToken(await getUser(username))
        res.cookie("user-access-token", token, {
            maxAge: daysToMilliSeconds(3),
            httpOnly: true,
        })
        responseMessage(res, 200, 'USER_REG_SUCCESS');
        return;
    }
    responseMessage(res, 500, 'USER_REG_FAILED');
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

export const getIdController = (req, res) => {
    if (!req.authenticated) {
        responseMessage(res, 500, 'NOT_AUTHENTICATED');
        return
    }
    const decoded_token = verify(req.cookies["user-access-token"], process.env.SECRET_KEY);
    responseMessage(res, 200, decoded_token.id);
}

export const userDataController = async (req, res) => {
    if (!req.authenticated) {
        responseMessage(res, 500, 'NOT_AUTHENTICATED');
        return;
    }
    const decoded_token = verify(req.cookies["user-access-token"], process.env.SECRET_KEY);
    const userData = await getUserData(decoded_token.id);
    if (userData == null) {
        responseMessage(res, 500, 'USER_FETCH_FAILED');
        return;
    }
    responseMessage(res, 200, userData);
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