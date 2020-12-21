const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const helper = require('../helpers/helpers');
const validator = require('../middlewares/validator'); //requiero al middle de validaciones


/* ROUTES USERS */

router.get('/login', usersController.login); //users/login (el "users" ya viene por default en el router)
router.post('/login', validator.login, usersController.processLogin);
router.get('/register', usersController.register);
router.post('/processRegister', validator.register, helper.uploadUser().any(), usersController.processRegister);

/*Export */

module.exports = router;

