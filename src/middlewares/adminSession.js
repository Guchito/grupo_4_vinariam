const helper = require('../helpers/helpers');

const adminSession = function (req, res, next) {
    if(req.session.email){
        const user = helper.getAllUsers(req.session.email);
        if(user.category = 'admin'){
            req.session.admin = 'admin'
        }
    }
    next()
}

module.exports = adminSession;