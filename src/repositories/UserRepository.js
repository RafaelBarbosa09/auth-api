const User = require('../models/User');

class UserRepository {
    async findByEmail(email) {
        try {
            return await User.findOne({ where: { email } });
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async findById(id) {
        try {
            return await User.findOne({ where: { id } });
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async store(user) {
        try {
            return await User.create(user);
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = new UserRepository();