const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController'); //requiero al controlador

/* ROUTES ADMIN */

router.get('/carga', adminController.carga);

/*Export */

module.exports = router;