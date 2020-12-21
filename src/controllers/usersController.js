const helper = require('../helpers/helpers');

/* VIOLE, LE AGREGUE EL JS */
const bcryptjs = require('bcryptjs');

/* VIOLE */
const { check, validationResult, body } = require ('express-validator')

const usersController = {
	login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    }, 
    carga: (req, res) => {
    
            const newUser = {
                id: helper.generateNewIdUsers(),
                name: req.body.name,
                lastName: req.body.lastName,
                userName: req.body.userName,
                birthday: req.body.birthday,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10),
                image: req.files[0].filename,
                category: "user"
            }
    
         const users = helper.getAllUsers();
         const saveUser = [...users, newUser];
         helper.writeUsers(saveUser);
    
         res.redirect('/');
 
    },

    /* VIOLE */

    processLogin: (req, res) => {
        const email = req.body.email;
		const password = req.body.password;
		const users = helper.getAllUsers();
		const userExist = users.find((user) => {
			return user.email == email
		});

		if (userExist && bcryptjs.compareSync(password, userExist.password)) {
            req.session.email = email;
            if(userExist.category == "admin"){
                req.session.admin = email;
            };
            console.log('Usuario: ' + req.session.email + ' Admin: ' + req.session.admin)
			res.redirect('/');
		}else{
			res.render('login',{
				loginError: true
			})
		}

	}

    /* processLogin: (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        const users = helper.getAllUsers();

        const userExist = users.find((user) => {
        return user.email === email;
        });

        if (userExist && bycryptjs.compareSync(password, userExist.password)){
        req.session.user = userExist.email;
        console.log(userExist)
        

        }
*/

        /*processLogin: (req, res) => {
        const results = validationResult(req);
        if (!results.isEmpty()) {
            return res.render('login', {
                errors: results.errors,
                old: req.body
            });    
        }
        const userFound = readJson().find(user => user.email == req.body.email);
        req.session.user = userFound;
        if (req.body.remember){
            res.cookie('user', userFound.id, { maxAge: 1000 * 60 * 60 });
        }
        return res.redirect('/');
    }*/

}

module.exports = usersController;