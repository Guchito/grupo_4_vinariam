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
        helper.delete(req.params.id);
        res.redirect('/productos');  
    },

    edit: (req, res, next) => {

    
    },
     
    processEdit: (req, res, next) => {

        const products = helper.getAllProducts();
        const editedProducts = products.map(function(product){
        
            if (product.id == req.params.id){
                product.name = req.body.name;
                product.price = req.body.price;
                product.category = req.body.category;
                product.code = req.body.code;
                product.stock = req.body.stock;
                product.description = req.body.description;
                product.class = req.body.class;
                product.image = req.files[0] ? req.files[0].filename:product.image
            }
            
            return product
        
            });
        
            helper.writeProducts(editedProducts);    

            res.redirect('/productos'); 
    }
}





module.exports = adminController;
