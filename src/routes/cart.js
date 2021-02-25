const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController'); 


router.get('/', cartController.showCart);
router.post('/addToCart/:id', cartController.addToCart);
router.post('/delete/:id', cartController.deleteFromCart);
router.post('/buy', cartController.buy);
router.get('/bought', cartController.bought);


module.exports = router;