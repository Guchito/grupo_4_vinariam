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
        
    }/*, 
    create: async (req, res, next) => {
        const body = req.body
        try {
            const password = bcrypt.hashSync(body.password, 10);
            const user = await db.User.create({
                ...body,
                password
            })
            res.json({
                meta: {
                    status: 'success',
                },
                data: {
                    user,
                }
            })
        } catch(error) {
            res.status(500).json({
                meta: {
                    status: 'error',
                },
                error: 'Ups intente nuevamente',
            })
        }
        
    }*/,

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
        } 

        res.json({
            meta: {
                status: 400,
            }, 
            
        })
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
                    status: 'success',
                }
            })
            return;
        }

        res.json({
            meta: {
                status: 400,
            }
            
        })

    } 
}

module.exports = apiUsersController;
