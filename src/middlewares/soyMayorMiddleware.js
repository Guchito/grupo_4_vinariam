const soyMayorMiddleware = function(req,res,next) {
    if(req.originalUrl == '/enter'){
        next();
    }else{
        // const originalUrl = req.originalUrl;
        // module.exports = originalUrl;
        // console.log('En el middleware: ' + originalUrl);
        if (req.session.mayor){
            next();
        }
        res.redirect('/enter')
    }
}

module.exports = soyMayorMiddleware;
