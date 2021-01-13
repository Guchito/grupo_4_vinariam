const { writeProducts, getAllUsers } = require('../helpers/helpers');
const helper = require('../helpers/helpers'); // Requiero a las funciones de helpers
const db = require('../database/models')



/** CONTROLADORES **/

const adminController = {
    index: async (req, res) => {
        const user = await db.User.findOne({where:{email:req.session.email}})        
        res.render('adminIndex', {user: user})

    },

	carga: async (req, res) => {
        const categories = await db.Category.findAll();
        const brands = await db.Brand.findAll();
        res.render('uploadProduct', {categories, brands});
    },
    
    // Carga - Store
    store: async (req, res) => 
    { 
    
        const newProduct = {
            name: req.body.name,
            detail: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            stock: req.body.stock,
            brand_id: req.body.brand,
            class: req.body.class,            
            image: req.files[0].filename
        };
        const category = {
            category_id: req.body.category
        };
        const size = {
            size: req.body.size
        }
        await db.Product.create(newProduct);
        

     res.redirect('/');
    },
    editar: async (req, res) => {
        const product = await db.Product.findByPk(req.params.id);
        const categories = await db.Category.findAll();
        const brands = await db.Brand.findAll();
        
        res.render('editProduct', {product, categories, brands});
    },

    processEdit: async (req, res) => {
        const productToEdit = {
            name: req.body.name,
            detail: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            stock: req.body.stock,
            brand_id: req.body.brand,
            class: req.body.class,            
            image: req.files[0].filename
        };
        const category = {
            category_id: req.body.category
        };
        const size = {
            size: req.body.size
        }
        await db.Product.update(
            productToEdit,
            {where: {id: req.params.id}
        });

            res.redirect('/productos/detail/' + id); 
    },

    delete: async (req, res) => {
        await db.Product.destroy({
            where: {id: req.params.id }
        });
        res.redirect('/productos');  
    }
     

}





module.exports = adminController;
