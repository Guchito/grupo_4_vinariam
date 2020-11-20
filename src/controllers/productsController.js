
const helper = require('../helpers/helpers') // Requiero a las funciones de helpers


/*********Controllers ******************/

const productsController = {
	detail: (req, res) => {
		const id = req.params.id;
		const products = helper.getAllProducts();
		const result = products.find((product) => {
			return product.id == id
		});

		res.render('detail', {product: result});
	},

    cart: (req, res) => {
		const products = helper.getAllProducts();
		const someProducts = products.filter((product) => {
			return product.id < 4;
		});

		let subTotal = 0;
		for (let i = 0; i < someProducts.length; i++) {
			const element = someProducts[i].price;
			subTotal += element;
		}
		const shipping = 400;
		const total = subTotal + shipping;
		
		res.render('cart', {products: someProducts, subTotal: subTotal, shipping: shipping, total: total});
    },

    listaProductos: (req, res) => {
        const products = helper.getAllProducts();
        res.render('listaProductos', {products: products});
    }

}

module.exports = productsController;