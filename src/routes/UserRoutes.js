var router = require('express').Router();

const UserController = require('../controllers/UserController');

router.get('/api/user/email/:email', UserController.findByEmail);

module.exports = router;