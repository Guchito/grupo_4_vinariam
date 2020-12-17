const express = require('express');
const router = express.Router();
const  usersController = require('../controllers/usersController');
const helper = require('../helpers/helpers');


/* ROUTES USERS */


router.get('/login', usersController.login); //users/login (el "users" ya viene por default en el router)
router.get('/register', usersController.register);
router.post('/carga', helper.uploadUser().any(), usersController.carga);
router.get('/carga', usersController.login);
/*Export */

module.exports = router;

