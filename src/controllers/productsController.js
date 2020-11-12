
const helper = require('../helpers/helpers') // Requiero a las funciones de helpers




/*********Controllers ******************/

const productsController = {
	producto: (req, res) => {
        const products = helper.getAllProducts();
        res.render('product', {products: products});
    },

    cart: (req, res) => {
        res.render('cart');
    },

    listaProductos: (req, res) => {
        const products = helper.getAllProducts();
        res.render('listaProductos', {products: products});
    },

    update: (req, res) => {
		

		const products = helper.getAllProducts();

		const id = req.params.id;
		
		const newProducts = products.map((product) => {

			if(id == product.id){
				product.name = req.body.name;
				product.price = req.body.price;
				product.discount = req.body.discount;
				product.category = req.body.category;
				product.description = req.body.description;
				product.image = req.files[0] ? req.files[0].filename : product.image;
			}

			return product;
		});

		helper.writeProducts(newProducts);

		res.redirect("/products/detail/" + id);
	},



}

module.exports = productsController;