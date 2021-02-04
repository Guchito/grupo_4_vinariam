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

    login: async (req, res, next) => {
        const email = req.body.email;
        const password = req.body.password;
        console.log('email: ' + email + ' Contraseña: ' + password);

        const user = await db.User.findOne({
            where: {
                email,
            }
        })

        if (user && bcrypt.compareSync(password, user.password)) {
            res.json({
                meta: {
                    status: 'success',
                },
                data: {
                    user
                }
            })
            return;
        } else {

        res.json({
            meta: {
                status: '400',
            }
            
        })
    }
    }, 

    checkEmail: async (req, res, next) => {
        const email = req.body.email;
        console.log(req.body.email);
        const user = await db.User.findOne({
            where: {
                email,
            }
        })

        if (!user) {
            res.json({
                meta: {
                    status: 'No exist',

                }
            })
            return;
        }

        res.json({
            meta: {
                status: 'Exist',
                data: {
                    user
                }
            }
            
        })

    }, 
    checkUserName: async (req, res, next) => {
        const user_name = req.body.userName;
        console.log(req.body.userName);
        const user = await db.User.findOne({
            where: {
                user_name,
            }
        })

        if (user) {
            res.json({
                meta: {
                    status: 'Exist',
                    data: {
                        user
                    }
                }
            })
            return;
        }

        res.json({
            meta: {
                status: 'No exist',
            }
            
        })
    }
}

module.exports = apiUsersController;
