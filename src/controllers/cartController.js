const db = require('../database/models')

const cartController = {
    showCart: (req, res) => {
        res.send('Soy un carrito');
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