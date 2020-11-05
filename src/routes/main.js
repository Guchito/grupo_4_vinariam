const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController'); //requiero al controlador

/* GET home page. */

router.get('/', mainController.index);


/*Export */

module.exports = router;
