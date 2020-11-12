const helper = require('../helpers/helpers') // Requiero a las funciones de helpers


/** CONTROLADORES **/

const adminController = {
	carga: (req, res) => {
        res.render('carga');
    }
}


module.exports = adminController;
