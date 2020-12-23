const adminSession = function (req, res, next) {
    if(!req.session.admin){
        res.redirect('./users/profile') //me tira el mismo error de header que no se que es!
    }
    next()
}

module.exports = adminSession;