const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController'); //requiero al controlador

/* ROUTES ADMIN */

router.get('/carga', adminController.carga); // Ver la vista de carga de productos
router.post('/carga', adminController.store); // Carga el formulario

/*Export */

module.exports = router;