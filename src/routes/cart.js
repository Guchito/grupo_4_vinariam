const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController'); 


router.get('/', cartController.showCart);
router.post('/addToCart/:id', cartController.addToCart);
router.delete('/delete/:id', cartController.deleteFromCart);
router.get('/buy', cartController.buy);
router.get('/bought', cartController.bought);


module.exports = router;