const helper = require('../helpers/helpers');
const db = require('../database/models')

const adminSession = async function (req, res, next) {
    if(req.session.email){
        const user = await db.User.findOne({where:{email:req.session.email}})
        if(user.rol == 20){
            req.session.admin = 'admin'
        }
    }
    next()
}

module.exports = adminSession;