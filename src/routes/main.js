const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController'); //requiero al controlador

/* ROUTES MAIN */

router.get('/', mainController.index);
router.get('/enter', mainController.enter);

/*Export */

module.exports = router;
