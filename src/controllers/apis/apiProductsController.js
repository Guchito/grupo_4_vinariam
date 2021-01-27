const db = require('../../database/models');
const bcrypt = require('bcryptjs');

const apiProductsController = {
	list: async (req, res, next) => {
        const products = await db.Product.findAll({
            attributes: ['name']
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
