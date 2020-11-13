const helper = require('../helpers/helpers') // Requiero a las funciones de helpers


const mainController = {
	index: (req, res) => {
        const products = helper.getAllProducts();
        const destacados = products.filter((product) => {
			return product.class == "destacado";
		});
        res.render('index', {
            productDest: destacados
        });
    },
    enter: (req, res) => {
        res.render('enter');
    },
    error: (req, res) => {
        res.render('error');
    }
}


module.exports = mainController;


