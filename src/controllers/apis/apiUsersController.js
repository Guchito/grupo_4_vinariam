const db = require('../../database/models');
const bcrypt = require('bcryptjs');

const apiUsersController = {
	list: async (req, res) => {
        
        const users = await db.User.findAll({
                attributes: ['email', 'name','last_name','user_name', 'rol', 'dob']
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
        
    }, 

    /*login: async (req, res, next) => {
        const { email, password } = req.body

        const user = await db.User.findOne({
            where: {
                email,
            }
        })

        console.log('user', user)

        if (user && bcrypt.compareSync(password, user.password)) {
            res.json({
                meta: {
                    status: 'success',
                },
                data: {
                    user
                }
            })
            return
        }

        res.status(400).json({
            meta: {
                status: 'error',
            },
            error: 'Email o password incorrecto',
        })
    }*/
}

module.exports = apiUsersController;
