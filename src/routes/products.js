const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController'); //requiero al controlador
const soyMayorMiddleware = require('../middlewares/soyMayorMiddleware');

/* ROUTES PRODUCTS */

router.get('/',soyMayorMiddleware, productsController.listaProductos); /// localhost:3000/productos
router.get('/detail/:id/',soyMayorMiddleware, productsController.detail); //productos/producto (el "productos" ya viene por default en el router)
router.get('/cart',soyMayorMiddleware, productsController.cart);



/*Export */

module.exports = router;
