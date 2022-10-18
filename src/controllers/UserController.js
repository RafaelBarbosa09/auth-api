const UserService = require("../services/UserService");

class UserController {
    async findByEmail(req, res) {
        const { email } = req.params;

        const response = await UserService.findByEmail(email);

        return res.status(response.status).json(response.user);
    }
}

module.exports = new UserController();