const db = require('../../database/models');

const apiProductsController = {
	list: async (req, res) => {
        const page = Number(req.query.page) || 1; //PORQUE SI LA PERSONA NO PASA LA PAGINA QUE SEA LA PAGINA 1 JEJEJEE
        const allProducts = await db.Product.findAndCountAll({
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
        const totalPages = Math.ceil(allProducts.count / 5)
        const products = allProducts.rows.map(product => {
            return (
                product.dataValues.urlDetail = `http://localhost:3000/api/products/${product.id}`,
                product
   
            )
        })

        const malbec = products.filter((product) => {
           return product.categories.name == 'Malbec'
           //TRAER CATEGORIAS, CON TODOS SUS PRODUCTOS ASOCIADOS, USAR MAP,
           // POR CADA UNA DE LAS VUELTAS, PREGUNTA LA CANT DE PRODUCTOS POR ESA CATEGORIA, AGREGAR PROPIEDAD CON ESE LENGTH DE PRODUCTS.
          
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
        
        res.json({
            meta: {
                status: "success", 
                count: allProducts.count,
                count_category_malbec: malbec.length,
                count_category_cabernet: cabernet.length,
                count_category_rosado: rosado.length,
                count_category_blanco: blanco.length,
                count_category_blend: blend.length,
                previousPage: page > 1 ? `http://localhost:3000/api/products?page=${page - 1}` : null,
                currentPage: `http://localhost:3000/api/products?page=${page}`,
                nextPage: page < totalPages ? `http://localhost:3000/api/products?page=${page + 1}` : null,
                totalPages: totalPages
            }, 
            data: {
                products,

            }
        })
        
    },

    detail: async (req, res, next) => {

        const product = await db.Product.findByPk(req.params.id, {
            include: [
            {
                all: true, 
                nested: true
            }
        ], 

        })
            
    product.dataValues.urlImg = `http://localhost:3000/api/users/${product.img}`
    
    res.json({
        meta: {
            status: "success", 
            count: product.length
        }, 
        data: {
            product

        }
    })

    }
}

module.exports = apiProductsController;


// guardar en session storage esos productos id que esta queriendo comprar pero que no esta logueado, y cuando te logueas lo mandas
