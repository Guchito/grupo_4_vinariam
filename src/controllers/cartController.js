

const cartController = {
    showCart: (req, res) => {
        res.send('Soy un carrito');
    },
    addToCart: (req, res) => {
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