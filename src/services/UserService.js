const HTTP_STATUS = require('../config/constants/httpStatus');
const UserRepository = require('../repositories/UserRepository');
const UserException = require('../exceptions/UserException');

class UserService {
    async findByEmail(email) {
        try {
            const user = await UserRepository.findByEmail(email);
            this.validateUserNoteFound(user);
            delete user.password;

            return {
                status: HTTP_STATUS.OK,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                }
            }
        } catch (err) {
            return {
                status: err.status ? err.status : HTTP_STATUS.INTERNAL_SERVER_ERROR
            };
        }
    }

    async validadeUserExists(email) {
        const user = await UserRepository.findByEmail(email);
        if (user) throw new UserException(HTTP_STATUS.BAD_REQUEST, 'User already exists');
    }

    validateUserNoteFound(user) {
        if (!user) {
            throw new UserException(HTTP_STATUS.NOT_FOUND, 'User not found');
        }
    }
}

module.exports = new UserService();