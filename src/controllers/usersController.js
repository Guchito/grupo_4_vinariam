const helper = require('../helpers/helpers');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const { getAUser } = require('../helpers/helpers');
const db = require('../database/models')

const usersController = {
	login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    }, 
    processRegister: async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()){
            res.render('register', {errors: errors.errors})
        } else {
           
        const newUser = {
            name: req.body.name,
            last_name: req.body.lastName,
            user_name: req.body.userName,
            dob: req.body.birthday,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.files[0].filename
        };
       
        await db.User.create(newUser);
        
        
        res.redirect('/users/login');
    }
 
    },

    processLogin: (req, res) => {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            res.render('login', {errors: errors.errors})
        }
        req.session.email = req.body.email;
        
        if (req.body.recordame){
            res.cookie('email', req.body.email, { maxAge: 1000 * 60 * 60 * 24 * 365 });
        };
        res.redirect('/users/profile');	
    },

    profile: (req,res) => {
        if(req.session.admin){
            res.redirect('/admin')
        }
        const user = helper.getAUser(req.session.email)
        res.render('profile', {user: user})
    },
    logout: (req, res) => {
        if(req.cookies.email){
            res.clearCookie('email');
            
        }
        req.session.destroy();
        res.redirect('/');
    }
    
/*
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
*/
	

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