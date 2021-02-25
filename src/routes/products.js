const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController'); //requiero al controlador


/* ROUTES PRODUCTS */

router.get('/', productsController.listaProductos); /// localhost:3000/productos
router.get('/detail/:id/', productsController.detail); //productos/producto (el "productos" ya viene por default en el router)
router.get('/experiencias', productsController.experiences);



/*Export */

module.exports = router;
