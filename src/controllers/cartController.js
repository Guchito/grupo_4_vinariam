const db = require('../database/models')

const cartController = {
    showCart: async (req, res) => {
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

        return res.render('products/cart', {items})
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
            quantity: 1, //hay que ver por que no nos esta llegando el body en req
            sub_total: price * req.body.quantity,
            user_id: userId,
        })


        res.send('Agregaste un objeto al carrito');
    },
    deleteFromCart: (req, res) => {
        res.send('Borraste del carrito');
    },
    buy: (req, res) => {
        res.send('Compraste');
    },
    bought: (req, res) => {
        res.send('Tus compras');
    }
}

module.exports = cartController;