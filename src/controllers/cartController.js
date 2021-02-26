const db = require('../database/models')

const cartController = {
    showCart: async (req, res) => {
        var userId = 0;
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
        subTotal = parseInt(contadorSubTotal)
        return res.render('products/cart', {items, subTotal, userId})
    },
    addToCart: async (req, res) => {

        const product = await db.Product.findByPk(req.params.id)
        const price =  product.price * (1 - product.discount/100);
        var userId = 0;
        

        if (req.session.email){
            const user = await db.User.findOne({ where: {email:req.session.email} }); 
            userId = user.id
        }


        let item = await db.Item.create({
            name: product.name,
            img: product.img,
            unit_price: price,
            quantity: req.body.quantity, 
            sub_total: price * req.body.quantity,
            user_id: userId,
        })


        res.redirect('/cart')
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
        var userId = 0;
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
        var userId = 0;
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