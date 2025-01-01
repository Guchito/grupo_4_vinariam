const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const { User } = require('../database/models')
const path = require('path') 

module.exports = {
    register: [
        body('email').notEmpty().withMessage('Email is required').bail()
        .isEmail().withMessage('The email is not valid').bail()
        .custom(value => {
            return User.findOne({where:{email:value}})
            .then(user => {
                if(user){
                    return Promise.reject('Email already exists');
                }
            })
        }),       
        body('name').notEmpty().withMessage('Enter your name').bail()
        .isLength({min: 2, max:99}).withMessage('Your name must have at least 2 characters').bail(),
        body('lastName').notEmpty().withMessage('Enter your last name').bail(), 


        body('userName').notEmpty().withMessage('User name is required').bail()
        .custom(value => {
            return User.findOne({where:{user_name:value}})
            .then(user =>{
                if(user){
                    return Promise.reject('User name already exists');
                } 
            })
        }),
        body('image')
        .custom((value, { req }) => req.files[0])
        .withMessage('Image is required')
        .bail()
        .custom((value, {req}) => {
            const extensionesOk = ['.jpg', '.png','.jpeg', '.gif', '.svg'];
            const extensionSubida = path.extname(req.files[0].originalname);
            return extensionesOk.includes(extensionSubida);

        }).withMessage("The extension is not valid").bail(),
        body('terminos').custom(value => {
            return value;

        }).withMessage('You must accept the terms and conditions').bail(),
        
        body('password').notEmpty().withMessage('Enter your password').bail()
        .isLength({min: 8, max:99}).withMessage('The password must have at least 8 characters').bail()
        .custom((value, {req} )=> {
            return value == req.body.passwordconfirm;
        }).withMessage('Passwords do not match').bail(),
       
        body('passwordconfirm').notEmpty().withMessage('Repeat your password'),
    ], 
    
    login: [
        [
            body('email').notEmpty().withMessage('Email is required').bail()
                .isEmail().withMessage('The email is not valid').bail()
                .custom((value, {req})=>{
                    return User.findOne({where:{email:value}})
                    .then(user => {
                        if(!user || !bcrypt.compareSync(req.body.password, user.password)) {
                           return Promise.reject('Email or password incorrect');
                        }
                    })
                }),
            body('password').notEmpty().withMessage('Enter your password').bail()
        ],
    ],
    edit: [
        body('email').isEmail().withMessage('The email is not valid').bail()
        .custom((value, {req})=> {
            if(req.session.email != value){
                return User.findOne({where:{email:value}})
                .then(user => {
                    if(user){
                        return Promise.reject('Email already exists');
                    }    
                })
            }else return true
        }),
        body('userName').custom((value, {req})=>{
            return User.findOne({where:{email:req.session.email}})
            .then (userOriginal => {
                if(userOriginal.user_name  != value){
                    return User.findOne({where:{user_name:value}})
                    .then(user =>{
                        if (user){
                            return Promise.reject('User name already exists');
                        }
                    })
                }else return true
            })
            
        }),
        body('image').custom((value, {req}) => {
            if (req.files[0]){
            const extensionesOk = ['.jpg', '.png','.jpeg', '.gif', '.svg'];
            const extensionSubida = path.extname(req.files[0].originalname);
            return extensionesOk.includes(extensionSubida);
            }else {
                return true;
            }

        }).withMessage("La extension no es valida").bail(),
      

    ], 
    editPassword:[
        body('newPassword').notEmpty().withMessage('Password is required').bail()
        .isLength({min: 8, max:99}).withMessage('The password must have at least 8 characters').bail()
        .custom((value, {req} )=> {
            return value == req.body.newPasswordConfirm;
        }).withMessage('Passwords do not match').bail(),
        
        body('newPasswordConfirm').notEmpty().withMessage('Repeat your password'),
        
        body('oldPassword').notEmpty().withMessage('Enter your password').bail()
        .custom((value, {req}) => {
            console.log(req.body.oldPassword)
            return User.findOne({where:{email:req.session.email}})
            .then(user => {
                if(!bcrypt.compareSync(req.body.oldPassword, user.password)) {
                   return Promise.reject('Password incorrect');
                }
            })
        })


    ],


    editProduct:[
        //body('name').notEmpty().withMessage('El nombre no puede estar vacio').bail()
        //.isLength({min: 5, max:99}).withMessage('El nombre debe tener como mínimo 5 caracteres').bail(),
        body('detail').isLength({min: 20}).withMessage('Description must be at least 20 characters').bail(),
        body('image').custom((value, {req}) => {
            if (req.files[0]){
            const extensionesOk = ['.jpg', '.png','.jpeg', '.gif', '.svg'];
            const extensionSubida = path.extname(req.files[0].originalname);
            return extensionesOk.includes(extensionSubida);
            }else {
                return true;
            }

        }).withMessage("The extension is not valid").bail()
        .custom((value, { req }) => req.files[0]).withMessage('Image is required').bail()
    ]
    
}