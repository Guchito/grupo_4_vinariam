const express = require('express');
const router = express.Router();
const apiUsersController = require('../../controllers/apis/apiUsersController');

router.get('/', apiUsersController.list);
router.post('/login', apiUsersController.login);
router.post('/checkEmail', apiUsersController.checkEmail);

module.exports = router;