const { writeUsers } = require('../helpers/helpers');
const helper = require('../helpers/helpers');
const bcrypt = require('bcrypt');

const usersController = {
	login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    }, 
    carga: (req, res) => {
        { 
            const newUser = {
                id: helper.generateNewIdUsers(),
                name: req.body.name,
                lastName: req.body.lastName,
                userName: req.body.userName,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                image: req.files[0].filename,
                category: "user"
            }
    
         const users = helper.getAllUsers();
         const saveUser = [...users, newUser];
    
         helper.writeUsers(saveUser);
    
         res.redirect('/');
        }
    }

}

module.exports = usersController;