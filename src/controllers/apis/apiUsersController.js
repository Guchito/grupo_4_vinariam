const db = require('../../database/models');
const bcrypt = require('bcryptjs');

const apiUsersController = {
	list: async (req, res) => {
        
        const allUsers = await db.User.findAll({
                attributes: ['id','name', 'email'], 
                order: [
                    ['id']
                ],
                limit: 5

            })
        const users = allUsers.map(user => {
            return (
                user.dataValues.urlDetail = `http://localhost:3000/api/users/${user.id}`,
                user
                
            )
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
