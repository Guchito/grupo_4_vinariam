const productsController = {
	producto: (req, res) => {
        res.render('product');
    },
    cart: (req, res) => {
        res.render('cart');
    },
    listaProductos: (req, res) => {
        res.render('listaProductos');
    }

}

module.exports = productsController;