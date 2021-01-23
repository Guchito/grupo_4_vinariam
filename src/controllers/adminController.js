const { writeProducts, getAllUsers } = require('../helpers/helpers');
const helper = require('../helpers/helpers'); // Requiero a las funciones de helpers
const db = require('../database/models')
const {validationResult} = require('express-validator');


/** CONTROLADORES **/

const adminController = {
    index: async (req, res) => {
        const user = await db.User.findOne({where:{email:req.session.email}})        
        res.render('admin/adminIndex', {user: user})

    },

	carga: async (req, res) => {
        const categories = await db.Category.findAll();
        const brands = await db.Brand.findAll();
        const sizes = await db.Size.findAll();
        res.render('admin/uploadProduct', {categories, brands, sizes});
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
            img: req.files[0].filename
        };
        const category = {
            id: req.body.category
        };
        const size = {
            id: req.body.size
        };

        const product = await db.Product.create(newProduct);
        
        await product.setCategories(category.id, product.id); //Le paso de la constante category, el parametro id, y de la fila de productos creada, su id. Para la tabla intermedia
        await product.setSizes(size.id, product.id);


        return res.redirect(`/productos/detail/${product.id}`);
    },
    editar: async (req, res) => {
        const product = await db.Product.findByPk(req.params.id, {
            include: ["brand", "categories", "sizes"],
          });
        const categories = await db.Category.findAll();
        const brands = await db.Brand.findAll();
        const sizes = await db.Size.findAll();
       // return res.send(product)
        
        res.render('admin/editProduct', {product, categories, brands, sizes});
    },

    processEdit: async (req, res) => {
        let errors = validationResult(req);
        const product = await db.Product.findByPk(req.params.id);
        const brands = await db.Brand.findAll();
        const categories = await db.Category.findAll();
        const sizes = await db.Size.findAll();

        //Si hay errores > 
        if (!errors.isEmpty()){
            return res.render('admin/editProduct', {errors: errors.errors, product, brands, categories, sizes})
        } 
        //Si no hay errores  
        let imagen = "";
        if (req.files[0]) { //Si vino imagen
            console.log("estoy aca");
            imagen = req.files[0].filename //Guardo la imagen que vino+
        } else { //Si no vino imagen, guardo la imagen que tenia antes el producto
            imagen = product.img
        }
        const productToEdit = {
            name: req.body.name,
            detail: req.body.detail,
            price: req.body.price,
            discount: req.body.discount,
            stock: req.body.stock,
            brand_id: req.body.brand,
            class: req.body.class,            
            img: imagen
        };
        const category = {
            id: req.body.category
        };
        const size = {
            id: req.body.size
        }
    
        await db.Product.update(
            productToEdit,
            {where: {id: req.params.id}
        });

        await product.setCategories(category.id, product.id); 
        await product.setSizes(size.id, product.id);

        res.redirect('/productos/detail/' + product.id ); 
    },

    delete: async (req, res) => {
        const product = await db.Product.findByPk(req.params.id);
        await product.setCategories([]); // Antes de borrar el producto, borro en las tablas intermedias seteandolo como vacio
        await product.setSizes([]);

        await db.Product.destroy({
            where: {id: req.params.id }
        });
        res.redirect('/productos');  
    }
     

}





module.exports = adminController;
