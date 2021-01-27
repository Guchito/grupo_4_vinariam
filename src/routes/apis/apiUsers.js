const express = require('express');
const router = express.Router();
const apiUsersController = require('../../controllers/apis/apiUsersController');

router.get('/', apiUsersController.list);
router.post('/', apiUsersController.create);

module.exports = router;