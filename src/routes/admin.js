const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController'); //requiero al controlador
const usersController = require('../controllers/usersController');
const helper = require('../helpers/helpers');
const validator = require('../middlewares/validator');
const admin = require('../middlewares/admin')

/* ROUTES ADMIN */

router.get('/', admin , adminController.index);
router.get('/carga', admin , adminController.carga); // Ver la vista de carga de productos
router.post('/carga', helper.upload().any(), validator.editProduct, adminController.store); // Carga el formulario
router.get('/editar/:id', admin , adminController.editar);
router.delete('/editar/:id', adminController.delete); //Borrar un item 
router.put('/editar/:id', helper.upload().any(), validator.editProduct, adminController.processEdit); // Edita el formulario desde el put



/*Export */

module.exports = router;