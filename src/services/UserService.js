const bcrypt = require('bcrypt');

const UserRepository = require('../repositories/UserRepository');

class UserService {
    async findByEmail(email) {
        try {
            const user = await UserRepository.findByEmail(email);
            this.validateUserNotFound(user);
            this.deleteDataValueProperty(user, 'password');

            return user
        } catch (err) {
            return {
                message: err.message,
            };
        }
    }

    async store(user) {
        try {
            await this.validadeUserExists(user.email);

            user.password = await this.encryptPassword(user.password);
            const newUser = await UserRepository.store(user);
            this.deleteDataValueProperty(newUser, 'password');

            return newUser;
        } catch (err) {
            return {
                message: err.message,
            };
        }
    }

    async encryptPassword(password) {
        return await bcrypt.hash(password, 10);
    }

    deleteDataValueProperty(object, property) {
        delete object.dataValues[property];
    }

    async validadeUserExists(email) {
        const user = await UserRepository.findByEmail(email);
        if (user) throw new Error('User already exists');
    }

    validateUserNotFound(user) {
        if (!user) {
            throw new Error('User not found');
        }
    }
}

module.exports = new UserService();