const helper = require('../helpers/helpers'); // Requiero a las funciones de helpers
const soyMayor = require ('../middlewares/soyMayorMiddleware');
const originalUrl = soyMayor.originalUrl

const mainController = {
	index: (req, res, next) => {
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
    soyMayor: (req,res) => {
        req.session.mayor = true;
        res.redirect('/');
    },
    error: (req, res) => {
        res.render('error');
    }
}


module.exports = mainController;


