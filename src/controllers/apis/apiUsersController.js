const db = require('../../database/models');
const bcrypt = require('bcryptjs');
const URL = process.env.URL || 'http://localhost:3000'


const apiUsersController = {
	list: async (req, res) => {
        const page = Number(req.query.page) || 1;
        console.log(page)
        const allUsers = await db.User.findAndCountAll({
                attributes: ['id', 'user_name','name', 'last_name', 'dob' , 'email', 'avatar'], 
                order: [
                    ['id']
                ],
                limit: 5,
                offset: 5 * (page - 1)

            })
        const totalPages = Math.ceil(allUsers.count / 5)
        const users = allUsers.rows.map(user => {
            return (
                user.dataValues.urlDetail = `${URL}/api/users/${user.id}`,
                user.dataValues.imgUrl = `${URL}/img/users/${user.avatar}`,
                user
                
            )
        })
        res.json({
            meta: {
                status: "success", 
                count: allUsers.count,
                previousPage: page > 1 ? `${URL}/api/users?page=${page - 1}` : null,
                currentPage: `${URL}/api/users?page=${page}`,
                nextPage: page < totalPages ? `${URL}/api/users?page=${page + 1}` : null,
                totalPages: totalPages
            }, 
            data: {
                users,

            }
        })
        
    },

    detail: async (req, res, next) => {

        const user = await db.User.findByPk(req.params.id, {
            attributes: ['id','name', 'email', 'last_name', 'user_name', 'dob', 'avatar'], 
            limit: 5

        })
            
    user.dataValues.urlImg = `${URL}/img/users/${user.avatar}`
    
    res.json({
        meta: {
            status: "success", 
            count: user.length
        }, 
        data: {
            user

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
