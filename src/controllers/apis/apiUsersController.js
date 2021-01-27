const db = require('../../database/models');
const bcrypt = require('bcryptjs');

const apiUsersController = {
	list: async (req, res) => {
        
        const users = await db.User.findAll({
                attributes: ['email', 'name','last_name','user_name']
            })
        
        res.json({
            meta: {
                status: "success", 
                count: users.length
            }, 
            data: {
                users,
            }
        })
        
    }, 
    create: async (req, res, next) => {
        
    }
}

module.exports = apiUsersController;
