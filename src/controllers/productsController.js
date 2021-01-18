const db = require('../database/models');

/*********Controllers ******************/

const productsController = {    
	listaProductos: async (req, res) => {
		const products = await db.Product.findAll({
			include: ["categories", "brand"],
		  });
		const categories = await db.Category.findAll();
		res.render('listProducts', {products, categories});
	},

	detail: async (req, res) => {
		const id = req.params.id;
		const product = await db.Product.findByPk(id, {
			include: ["categories", "brand"],
		  })
		const admin = (req.session.admin) ? true: "";
		res.render('detail', {product, admin});
	},

    cart: async (req, res) => {
		const products = await db.Product.findAll({
			include: ["categories", "brand"],
		  });
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


	
	experiences: async (req, res) => {
		const products = await db.Product.findAll({
			include: ["categories", "brand"],
		  });
        res.render('experiences', {products: products});
	}

}

module.exports = productsController;