const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController'); //requiero al controlador


/* ROUTES MAIN */

router.get('/', mainController.index);
router.get('/enter', mainController.enter);
router.post('/enter', mainController.soyMayor);
router.get('/error', mainController.error);
router.get('/about', mainController.about);



/*Export */

module.exports = router;
