const guest = function (req, res, next) {

    if (!req.session.email){
        next()
    }else{
        res.redirect('/users/profile')
    }
}



module.exports = guest;