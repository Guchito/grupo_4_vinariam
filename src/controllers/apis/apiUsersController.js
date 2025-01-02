const db = require('../../database/models');
const bcrypt = require('bcryptjs');
const URL = process.env.URL || 'http://localhost:3000'


const apiUsersController = {
	list: async (req, res) => {
        try {
            const page = Number(req.query.page) || 1;
            const limit = 5;
            const offset = limit * (page - 1);
    
            const allUsers = await db.User.findAndCountAll({
                attributes: ['id', 'user_name', 'name', 'last_name', 'dob', 'email', 'avatar'],
                order: [['id']],
                limit,
                offset,
            });
    
            const totalPages = Math.ceil(allUsers.count / limit);
    
            const users = allUsers.rows.map(user => {
                user.dataValues.urlDetail = `${URL}/api/users/${user.id}`;
                user.dataValues.imgUrl = `${URL}/img/users/${user.avatar}`;
                return user;
            });
    
            res.json({
                meta: {
                    status: "success",
                    count: allUsers.count,
                    previousPage: page > 1 ? `${URL}/api/users?page=${page - 1}` : null,
                    currentPage: page,
                    nextPage: page < totalPages ? `${URL}/api/users?page=${page + 1}` : null,
                    totalPages,
                },
                data: {
                    users,
                },
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                meta: {
                    status: "error",
                    message: "An error occurred while fetching the users list",
                },
            });
        }
    },

    detail: async (req, res, next) => {
        try {
            const user = await db.User.findByPk(req.params.id, {
                attributes: ['id', 'name', 'email', 'last_name', 'user_name', 'dob', 'avatar'],
            });
    
            if (!user) {
                return res.status(404).json({
                    meta: {
                        status: "error",
                        message: "User not found",
                    },
                });
            }
    
            // Add the URL for the user's avatar
            user.dataValues.urlImg = `${URL}/img/users/${user.avatar}`;
    
            res.json({
                meta: {
                    status: "success",
                    count: 1, // Single user fetched
                },
                data: {
                    user,
                },
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                meta: {
                    status: "error",
                    message: "An error occurred while fetching the user details",
                },
            });
        }
    },

    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;
    
            const user = await db.User.findOne({
                where: { email },
            });
    
            if (user && bcrypt.compareSync(password, user.password)) {
                // Generate token or handle session creation here if needed
                res.status(200).json({
                    meta: {
                        status: 'success',
                    },
                    data: {
                        user: {
                            id: user.id,
                            email: user.email,
                            name: user.name,
                            last_name: user.last_name,
                        }, // Return only necessary user information
                    },
                });
            } else {
                res.status(401).json({
                    meta: {
                        status: 'error',
                        message: 'Invalid email or password',
                    },
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                meta: {
                    status: 'error',
                    message: 'An error occurred while processing your request',
                },
            });
        }
    },

    checkEmail: async (req, res, next) => {
        try {
            const { email } = req.body;
    
            const user = await db.User.findOne({
                where: { email },
            });
    
            if (!user) {
                return res.status(404).json({
                    meta: {
                        status: 'No exist',
                    },
                });
            }
    
            res.status(200).json({
                meta: {
                    status: 'Exist',
                },
                data: {
                    user: {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        last_name: user.last_name,
                    }, // Return only necessary user information
                },
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                meta: {
                    status: 'error',
                    message: 'An error occurred while processing your request',
                },
            });
        }
    },
    checkUserName: async (req, res, next) => {
        try {
            const { userName } = req.body;
    
            const user = await db.User.findOne({
                where: { user_name: userName },
            });
    
            if (user) {
                return res.status(200).json({
                    meta: {
                        status: 'Exist',
                    },
                    data: {
                        user: {
                            id: user.id,
                            user_name: user.user_name,
                            name: user.name,
                            last_name: user.last_name,
                        }, // Return only the necessary user information
                    },
                });
            }
    
            return res.status(404).json({
                meta: {
                    status: 'No exist',
                },
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                meta: {
                    status: 'error',
                    message: 'An error occurred while checking the username',
                },
            });
        }
    }

};

module.exports = apiUsersController;
