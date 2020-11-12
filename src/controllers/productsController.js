const fs = require('fs');
const path = require('path');

const productsFilePath = path.resolve(__dirname, '../data/vinos.json');

function getAllProducts(){

	const jsonProducts = fs.readFileSync(productsFilePath, 'utf-8');

	const productsParsed = JSON.parse(jsonProducts);

	return productsParsed;
}

function writeProducts(arrayToTransform) {
	const productsJson = JSON.stringify(arrayToTransform, null, " ");
	fs.writeFileSync(productsFilePath, productsJson);
}

function generateNewId(){
	const products = getAllProducts();
	return products.pop().id + 1;
}

//NUESTRO CODIGO//

const productsController = {
	producto: (req, res) => {
        const products = getAllProducts();
        res.render('product', {products: products});
    },

    cart: (req, res) => {
        res.render('cart');
    },

    listaProductos: (req, res) => {
        const products = getAllProducts();
        res.render('listaProductos', {products: products});
    },

    update: (req, res) => {
		

		const products = getAllProducts();

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

		writeProducts(newProducts);

		res.redirect("/products/detail/" + id);
	},



}

module.exports = productsController;