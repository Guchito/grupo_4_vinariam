const db = require('../database/models')

const cartController = {
    addToCart: async (req, res) => {
    
        const product = await db.Product.findByPk(req.params.id);
        product.dataValues.priceWDiscount = parseInt(product.price * (1 - product.discount/100));
        product.dataValues.quantity = parseInt(req.body.quantity);
        product.dataValues.sub_total = product.dataValues.priceWDiscount * product.dataValues.quantity;

        
        if (req.session.email){
            const user = await db.User.findOne({ where: {email:req.session.email} }); 
            
            await db.Item.create({
                name: product.name,
                img: product.img,
                unit_price: parseInt(product.price * (1 - product.discount/100)),
                quantity: parseInt(req.body.quantity), 
                sub_total: parseInt(product.price * (1 - product.discount/100) * req.body.quantity),
                user_id: user.id,
            })
            
        }
        if(req.session.productToCart){

            const productToSession = product.dataValues
            
            req.session.productToCart.push(productToSession);
        }else{
            req.session.productToCart = [product.dataValues]
        }
        // middleware global que siempre cree req.session.productToCart
        //[...req.session.productToCart, product, price, quantity]

        res.redirect('/cart')
    },
    showCart: async (req, res) => {
        let userId = 0
        let items = [];

        if (req.session.email){
            const user = await db.User.findOne({ where: {email:req.session.email} }); 
            userId = user.id
            
            items = await db.Item.findAll({
                where: {
                    user_id: userId, 
                    order_id: null
                }
            })
        
        
        }else if (req.session.productToCart){
            items = req.session.productToCart
        }
        let contadorSubTotal=0;
        for (const item of items) {
            contadorSubTotal = parseInt(contadorSubTotal) + parseInt(item.sub_total);
        }
        subTotal = parseInt(contadorSubTotal)
        return res.render('products/cart', {items, subTotal, userId})
        
    },
    deleteFromCart: async (req, res) => {
        const {id} = req.params
        await db.Item.destroy({
            where: {
                id: id
            }
        })
        res.redirect('/cart')
    },
    buy: async (req, res) => {
        let userId = 0;
        if (req.session.email){
            const user = await db.User.findOne({ where: {email:req.session.email} }); 
            userId = user.id
        }
        const items = await db.Item.findAll({
            where: {
                user_id: userId, 
                order_id: null
            }
        })

        let contadorSubTotal=0;
        for (const item of items) {
            contadorSubTotal = contadorSubTotal + parseInt(item.sub_total);
        }
        total = parseInt(contadorSubTotal)

        const order = await db.Order.create({
            total: total,
            user_id: userId
        })

        await db.Item.update({
            order_id: order.id

        }, {
            where: {
                user_id: userId, 
                order_id: null
            }
        })

        res.redirect('/cart/bought')
    },
    bought: async (req, res) => {
        let userId = 0;
        if (req.session.email){
            const user = await db.User.findOne({ where: {email:req.session.email} }); 
            userId = user.id
        }
        const users = await db.User.findByPk(userId, {
            include: {
                all: true,
                nested: true
            }
        })

        const myOrders = users.orders;

        res.render('products/myOrders', {myOrders})
        
    }
}

module.exports = cartController;