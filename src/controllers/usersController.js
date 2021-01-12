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

    processLogin: async (req, res) => {
        
        const errors = validationResult(req);
        if  (!errors.isEmpty()){
            return res.render('login', {errors: errors.errors})
        }
        let user = await db.User.findOne({where: {email:req.body.email}})
        req.session.email = user.email; 

        if (req.body.recordame){
            res.cookie('email', user.email, { maxAge: 1000 * 60 * 60 * 24 * 365 });
        };
        res.redirect('/users/profile');	
    },

    profile: async (req,res) => {

        let users = await db.User.findOne({where:{email:req.session.email}})
    
        if(req.session.admin){
            res.redirect('/admin')
        }
        
        res.render('userDetail', {users: users});
        
    },

    editUser: async (req,res) => {
    
        let users = await db.User.findOne({where: { email:req.session.email }});
        return res.render('editUser', {users: users});
    },

    updateUser: async (req,res) => {

        await db.User.update({
             name: req.body.name,  
             last_name: req.body.lastName,
             user_name: req.body.userName,
             email: req.body.email, 
             password: req.body.password,
             avatar: req.files[0].filename,
             dob: req.body.birthday
             }, 
             {
                 where: {
                     email: req.session.email
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