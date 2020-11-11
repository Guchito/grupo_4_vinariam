const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController'); //requiero al controlador

/* GET prducts page. */

router.get('/producto', productsController.producto); //productos/producto (el "productos" ya viene por default en el router)
router.get('/cart', productsController.cart);
router.get('/listaProductos', productsController.listaProductos);


/*Export */

module.exports = router;
