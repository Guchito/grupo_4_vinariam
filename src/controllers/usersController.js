const helper = require('../helpers/helpers');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models')

const usersController = {
	login: (req, res) => {
        res.render('users/login');
    },
    register: (req, res) => {
        res.render('users/register');
    }, 
    processRegister: async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()){
            res.render('users/register', {errors: errors.errors})
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

    processLogin: async (req, res) => {
        
        const errors = validationResult(req);
        console.log(errors)
        if  (!errors.isEmpty()){
            return res.render('users/login', {errors: errors.errors})
        }
        const user = await db.User.findOne({where: {email:req.body.email}})
        req.session.email = user.email; 

        if (req.body.recordame){
            res.cookie('email', req.body.email, { maxAge: 1000 * 60 * 60 * 24 * 365 });
        };
        res.redirect('/users/profile');	
    },

    profile: async (req,res) => {

        const user = await db.User.findOne({where:{email:req.session.email}})
    
        if(req.session.admin){
            res.redirect('/admin')
        }
        
        res.render('users/profile', {user: user});
        
    },

    editUser: async (req,res) => {
    
        const user = await db.User.findOne({where: { email:req.session.email }});
        return res.render('users/editUser', {user: user});
    },

    updateUser: async (req,res) => {
        const errors = validationResult(req);
        const user = await db.User.findOne({where: { email:req.session.email }});
        if  (!errors.isEmpty()){
            return res.render('users/editUser', {errors: errors.errors, user: user})
        };

        const updatedUser = {
            name: req.body.name,
            last_name: req.body.lastName,
            user_name: req.body.userName,
            dob: req.body.birthday,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.files[0].filename
        };
        console.log(req.session.email)
        await db.User.update(updatedUser, 
             {
                 where: {
                     email: req.session.email
                 }
             });
             res.redirect('/users/profile')
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