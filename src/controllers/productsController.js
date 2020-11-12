
const helper = require('../helpers/helpers') // Requiero a las funciones de helpers




/*********Controllers ******************/

const productsController = {
	detail: (req, res) => {
		const id = req.params.id;
		const products = helper.getAllProducts();
		const result = products.find((product) => {
			return product.id == id
		})

		res.render('detail', {
			product: result
		})
	},

    cart: (req, res) => {
        res.render('cart');
    },

    listaProductos: (req, res) => {
        const products = helper.getAllProducts();
        res.render('listaProductos', {products: products});
    }

}

module.exports = productsController;