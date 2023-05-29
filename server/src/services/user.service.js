const { getModels } = require('../config/db_config');

let models = null;
(async () => {
    models = await (async () => {
        return await getModels();
    })();
})();

export const usernameExists = async (username) => {
    try {
        let count = await models.User.countDocuments({ username });
        return count > 0;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export const validateUser = async (credentials) => {
    if (!await usernameExists(credentials.username)) {
        return false;
    }
    try {
        const password = (await models.User.findOne({ username })).password;
        const result = await bcrypt.compare(credentials.password, password);
        return result;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export const getUser = async (username) => {
    try {
        const user = await models.User.findOne({ username }, '_id username');
        if (user) {
            return {
                id: user._id,
                username: user.username
            };
        } else {
            return null;
        }
    } catch (err) {
        console.log(err);
        return null;
    }
}

export const createUserToken = (user) => {
    const access_token = sign(
        user,
        process.env.SECRET_KEY
    );
    return access_token;
}

export const addUser = async (user, hashedPassword) => {
    user.password = hashedPassword;
    const newUser = new models.User(user);
    try {
        await newUser.save();
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export const removeUser = async (id) => {
    try {
        const removedUser = await models.User.findByIdAndRemove(id);
        if (removedUser) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

export const getUserData = async (id) => {
    try {
        const user = await models.User.findOne({ _id: id }).select('-password');
        if (user) {
            return user;
        } else {
            return null;
        }
    } catch (err) {
        console.log(err);
        return null;
    }
}