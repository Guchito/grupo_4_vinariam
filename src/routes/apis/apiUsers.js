const express = require('express');
const router = express.Router();
const apiUsersController = require('../../controllers/apis/apiUsersController');

router.get('/', apiUsersController.list);
router.post('/login', apiUsersController.login);
router.get('/:id', apiUsersController.detail);
router.post('/checkEmail', apiUsersController.checkEmail);
router.post('/checkUserName', apiUsersController.checkUserName);

module.exports = router;