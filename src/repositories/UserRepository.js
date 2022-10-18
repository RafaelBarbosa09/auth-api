const User = require('../models/User');

class UserRepository {
    async findByEmail(email) {
        try {
            return await User.findOne({ where: { email } });
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }

    async findById(id) {
        try {
            return await User.findOne({ where: { id } });
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }
}

module.exports = new UserRepository();