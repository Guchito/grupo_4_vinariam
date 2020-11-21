const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController'); //requiero al controlador
const soyMayorMiddleware = require('../middlewares/soyMayorMiddleware');

/* ROUTES MAIN */

router.get('/',soyMayorMiddleware, mainController.index);
router.get('/enter', mainController.enter);
router.post('/enter', mainController.soyMayor);
router.get('/error', mainController.error);


/*Export */

module.exports = router;
