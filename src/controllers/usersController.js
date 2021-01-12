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

        /* createUser: (req,res) => {
            db.Users.findAll()
                return res.render('perfil', {users: users}) 
            }) 
        }
        */
        
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
        db.Users.findByPk(req.params.id)
        .then(function(user){
             res.render('userDetail', {users: users});
        })
    },

    editUser: async (req,res) => {
        let editarUsuario = await db.Users.findAll(req.params.id);
            (function(user){
                res.render('editUser', {users: users});
            })
    },

    updateUser: async (req,res) => {
        await db.Users.update({
             name: req.body.name,  
             last_name: req.body.lasName,
             user_name: req.body.userName,
             email: req.body.email, 
             password: req.body.password,
             avatar: req.files[0].filename,
             dob: req.body.birthday
             }, 
             {
                 where: {
                     id: req.params.id
                 }
             });
             res.redirect('/profile/' + req.params.id)
    },

    logout: (req, res) => {
        if(req.cookies.email){
            res.clearCookie('email');
            
        }
        req.session.destroy();
        res.redirect('/');
    }
    

}

module.exports = usersController;