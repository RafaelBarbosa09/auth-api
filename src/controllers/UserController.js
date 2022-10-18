const HTTP_STATUS = require("../config/constants/httpStatus");
const UserService = require("../services/UserService");

class UserController {
    async findByEmail(req, res) {
        const { email } = req.params;

        try {
            const user = await UserService.findByEmail(email);
            return res.status(HTTP_STATUS.OK).json(user);
        } catch (error) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({
                message: error.message,
            });
        }
    }

    async store(req, res) {
        const { email, name, password } = req.body;

        try {
            const user = await UserService.store({ email, name, password });
            return res.status(HTTP_STATUS.CREATED).json(user);
        } catch (error) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({
                message: error.message,
            });
        }
    }
}

module.exports = new UserController();