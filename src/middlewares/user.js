const user = function (req, res, next) {

    if (req.session.email){
        next()
    }else{
        res.redirect('/users/login')
    }
}



module.exports = user;