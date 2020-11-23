const helper = require('../helpers/helpers') // Requiero a las funciones de helpers


/** CONTROLADORES **/

const adminController = {
	carga: (req, res) => {
        res.render('carga');
    },
    
    // Carga - Store
    store: (req, res, next) => 
    { 
    
        const newProduct = {
            id: helper.generateNewId(),
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            presentation: req.body.presentation,
            category: req.body.category,
            subCategory: req.body.subCategory,
            presentation: req.body.presentation,
            description: req.body.description,
            image: req.files[0].filename
        }

     const products = helper.getAllProducts();
     const saveProduct = [...products, newProduct];

     helper.writeProducts(saveProduct);

     res.redirect('/');
    },

   /* delete: (req, res, next) => {

        const products = helper.getAllProducts();
        const productToDelete = req.params.id;
        products = products.filter(function(product){
            return product != productToDelete;

        })

        res.redirect('/productos'); o a la vista de admin de edicion 
    }*/
     
}





module.exports = adminController;
