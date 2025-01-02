const db = require('../../database/models');
const URL = process.env.URL || 'http://localhost:3000'

const apiProductsController = {
	list: async (req, res) => {
        const page = Number(req.query.page) || 1; //PORQUE SI LA PERSONA NO PASA LA PAGINA QUIERO QUE SEA LA PAGINA 1
        /*const lastProduct = await db.Product.findAll({
            limit: 1,
            order: [['id', 'DESC']]
        });*/

        const allProducts = await db.Product.findAll()
        const lastProduct = allProducts[allProducts.length - 1];
        lastProduct.dataValues.imgUrl = `${URL}/img/${lastProduct.img}`

       
        const allProductsPaginated = await db.Product.findAndCountAll({
            include: [
                {
                    all: true, 
                    nested: true
                }
            ],
            order: [
                ['id']
            ],
            limit: 5,
            offset: 5 * (page - 1)

        })

        const totalPages = Math.ceil(allProductsPaginated.count / 5)
        const products = allProductsPaginated.rows.map(product => {
            return (
                product.dataValues.urlDetail = `${URL}/api/products/${product.id}`,
                product.dataValues.imgUrl = `${URL}/img/${product.img}`,
                product
   
            )
        })
        console.log(products)
        

        const prices = allProducts.map(product => parseInt(product.price))
        const totalPrice = prices.reduce((acum, price) => acum + price)

        
        const allCategories = await db.Category.findAll({include:[{ all: true, nested: true }]})
        const categories = allCategories.map(cat => {
            const eachCat = [];
            /*eachCat.push(cat.name);
            eachCat.push(' amount: ')
            eachCat.push(cat.products.length);*/
            eachCat.push({
                name: cat.name,
                amount: cat.products.length
            })
            return eachCat
        })
        const amountCategories = allCategories.length



        /*
        const malbec = products.filter((product) => {
            return product.categories.name == 'Malbec'
            
        })
        const cabernet = products.filter((product) => {
            return product.categories.name == 'Cabernet Sauvignon'
            
        })
        const rosado = products.filter((product) => {
            return product.categories.name == 'Rosado'
            
        })
        const blanco = products.filter((product) => {
            return product.categories.name == 'Blanco'
            
        })
        const blend = products.filter((product) => {
            return product.categories.name == 'Blend'
            
        })
        */
        //TRAER CATEGORIAS, CON TODOS SUS PRODUCTOS ASOCIADOS, USAR MAP,
        // POR CADA UNA DE LAS VUELTAS, PREGUNTA LA CANT DE PRODUCTOS POR ESA CATEGORIA, AGREGAR PROPIEDAD CON ESE LENGTH DE PRODUCTS.
        
        res.json({
            meta: {
                status: "success", 
                count: allProductsPaginated.count,
                categories,
                totalPrice,
                amountCategories,
                previousPage: page > 1 ? `${URL}/api/products?page=${page - 1}` : null,
                currentPage: `${URL}/api/products?page=${page}`,
                nextPage: page < totalPages ? `${URL}/api/products?page=${page + 1}` : null,
                totalPages,
                lastProduct
            }, 
            data: {
                products,

            }
        })
        
    },

    detail: async (req, res, next) => {
        try {
            const product = await db.Product.findByPk(req.params.id, {
                include: [
                    {
                        all: true, 
                        nested: true
                    }
                ]
            });
    
            if (!product) {
                return res.status(404).json({
                    meta: {
                        status: 'error',
                        message: 'Product not found',
                    }
                });
            }
    
            // Add image URL to product data
            product.dataValues.urlImg = `${URL}/img/${product.img}`;
    
            res.status(200).json({
                meta: {
                    status: 'success', 
                    count: 1, // Since we're returning a single product
                }, 
                data: {
                    product
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                meta: {
                    status: 'error',
                    message: 'An error occurred while fetching the product details',
                }
            });
        }
    }
}

module.exports = apiProductsController;


