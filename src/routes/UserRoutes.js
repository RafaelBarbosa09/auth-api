var router = require('express').Router();

const UserController = require('../controllers/UserController');

router.get('/api/user/email/:email', UserController.findByEmail);
router.post('/api/users', UserController.store);

module.exports = router;