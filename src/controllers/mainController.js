const helper = require('../helpers/helpers'); // Requiero a las funciones de helpers
const soyMayor = require ('../middlewares/soyMayorMiddleware');
const originalUrl = soyMayor.originalUrl
const db = require('../database/models')

const mainController = {
	index: async (req, res, next) => {
        const products = await db.Product.findAll({
			include: ["categories", "brand"],
		  });
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
        console.log("im here")
        req.session.mayor = true;
        res.redirect('/');
    },
    error: (req, res) => {
        res.render('error');
    },
    about: (req, res) => {
        res.render('about');
    }

}


module.exports = mainController;


