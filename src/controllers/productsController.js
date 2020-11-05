const productsController = {
	producto: (req, res) => {
        res.render('product');
    },
    cart: (req, res) => {
        res.render('cart');
    }

}

module.exports = productsController;