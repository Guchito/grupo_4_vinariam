const adminSession = function (req, res, next) {
    if(!req.session.admin){
        res.redirect('/users/profile') 
    }
    next()
}

module.exports = adminSession;