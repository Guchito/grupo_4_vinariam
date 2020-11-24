const { writeProducts } = require('../helpers/helpers');
const helper = require('../helpers/helpers') // Requiero a las funciones de helpers


/** CONTROLADORES **/

const adminController = {
	carga: (req, res) => {
        res.render('uploadProduct');
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
    editar: (req, res, next) => {
        const products = helper.getAllProducts();
        const id = req.params.id;
        const result = products.find((product) => product.id == id);
        
        res.render('editProduct', {
            productEdit: result
        });
    },

   delete: (req, res, next) => {

        let products = helper.getAllProducts();
        const productToDelete = req.params.id;
        products = products.filter(function(product){
            return product.id != productToDelete;
        });
        helper.writeProducts(products);

        res.redirect('/productos');  
       
    },

    edit: (req, res, next) => {

    
    }
     
}



module.exports = adminController;
