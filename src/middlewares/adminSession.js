const helper = require('../helpers/helpers');

const adminSession = function (req, res, next) {
    if(req.session.email){
        const user = helper.getAUser(req.session.email);
        if(user.category == 'admin'){
            req.session.admin = 'admin'
        }
    }
    next()
}

module.exports = adminSession;