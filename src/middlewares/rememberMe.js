const rememberMe = function(req, res, next) {
    if (req.cookies.email){
        req.session.email = req.cookies.email;
        
    }
    next()
}
module.exports = rememberMe;