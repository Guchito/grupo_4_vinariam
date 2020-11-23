const express = require('express');
const router = express.Router();
const  usersController = require('../controllers/usersController');
const soyMayorMiddleware = require('../middlewares/soyMayorMiddleware');


/* ROUTES USERS */


router.get('/login',soyMayorMiddleware, usersController.login); //users/login (el "users" ya viene por default en el router)
router.get('/register',soyMayorMiddleware, usersController.register);


/*Export */

module.exports = router;

