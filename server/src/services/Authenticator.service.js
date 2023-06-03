const { sign } = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class AuthService {
    constructor(model) {
        self.model = model;
    }

    usernameExists = async (username) => {
        try {
            let count = await model.countDocuments({ username });
            return count > 0;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    validateMember = async (credentials) => {
        if (!await usernameExists(credentials.username)) {
            return false;
        }
        try {
            const password = (await model.findOne({ username: credentials.username })).password;
            const result = await bcrypt.compare(credentials.password, password);
            return result;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    getMember = async (username) => {
        try {
            const member = await model.findOne({ username }, '_id username');
            if (member) {
                return {
                    id: member._id,
                    username: member.username
                };
            } else {
                return null;
            }
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    createMemberToken = (member) => {
        const access_token = sign(
            member,
            process.env.SECRET_KEY
        );
        return access_token;
    }

    addMember = async (member, hashedPassword) => {
        member.password = hashedPassword;
        const newMember = new model(member);
        try {
            await newMember.save();
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    removeMember = async (id) => {
        try {
            const removedMember = await model.findByIdAndRemove(id);
            if (removedMember) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    getMemberData = async (id) => {
        try {
            const member = await model.findOne({ _id: id }).select('-password');
            if (member) {
                return member;
            } else {
                return null;
            }
        } catch (err) {
            console.log(err);
            return null;
        }
    }
}

module.exports = AuthService;