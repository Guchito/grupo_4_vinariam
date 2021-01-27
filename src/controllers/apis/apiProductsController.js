const db = require('../../database/models');

const apiProductsController = {
	list: async (req, res, next) => {
        const products = await db.Product.findAll({
            attributes: ['id','name','detail','price','stock', 'class', 'brand_id']
        })
        res.json({
            meta: {
                status: 200, 
                count: products.length
            }, 
            data: {
                products,
            }
        })
    }, 
    create: async (req, res, next) => {
        
    }
}

module.exports = apiProductsController;
