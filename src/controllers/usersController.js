const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const nodemailer = require('nodemailer');


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
    sendMail: (req,res) =>{
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "vinariamdh@gmail.com",
                pass: "sovilugu!"
            }
        });
        
        const mailOptions = {
            from: 'vinariamdh@gmail.com',
            to: 'agusgaggero@gmail.com',
            subject: 'Testing',
            text: 'its alive!'
        };
        
        transporter.sendMail(mailOptions, (err, data) => {
            if(err){
                console.log('error '+data)
            }else{
                console.log('enviado') 
            }
        })
        
    },
    sentMail: (req, res) => {
        res.render('users/sentMail')
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

        let imagen = "";
        if (req.files[0]) { //Si vino imagen
            imagen = req.files[0].filename //Guardo la imagen que vino
        } else { //Si no vino imagen, guardo la imagen que tenia antes el producto
            imagen = user.avatar
        }
        const updatedUser = {
            name: req.body.name,
            last_name: req.body.lastName,
            user_name: req.body.userName,
            dob: req.body.birthday,
            email: req.body.email,
            //password: req.body.newPassword ? bcryptjs.hashSync(req.body.newPassword, 10) : bcryptjs.hashSync(req.body.password, 10),
            avatar: imagen
        };
        

        await db.User.update(updatedUser,{where:{email: req.session.email}});
            res.redirect('/users/profile')
    },

    logout: (req, res) => {
        if(req.cookies.email){
            res.clearCookie('email');
            
        }
        req.session.destroy();
        res.redirect('/');
    },

    passwordRender: async (req,res) => {
        const user = await db.User.findOne({where: { email:req.session.email }});
        res.render('users/passwordUser', {user: user})
    },

    passwordPost: async (req, res) => {
        const errors = validationResult(req);
        if  (!errors.isEmpty()){
            return res.render('users/passwordUser', {errors: errors.errors})
        };

        const newPassword = bcryptjs.hashSync(req.body.newPassword, 10);
        
        await db.User.update({
            password: newPassword
        },
        {where:
            {email: req.session.email}
        });
        res.redirect('/users/profile')
    }
    

}

module.exports = usersController;