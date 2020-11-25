const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController'); //requiero al controlador
const helper = require('../helpers/helpers');

/* ROUTES ADMIN */


router.get('/carga', adminController.carga); // Ver la vista de carga de productos
router.post('/carga', helper.upload().any(), adminController.store); // Carga el formulario
router.get('/editar/:id', adminController.editar);
router.delete('/editar/:id', adminController.delete); //Borrar un item 
router.put('/editar/:id', helper.upload().any(), adminController.processEdit); // Edita el formulario desde el put



/*Export */

module.exports = router;