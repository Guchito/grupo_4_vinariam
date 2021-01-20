const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const helper = require('../helpers/helpers');
const { User } = require('../database/models')

module.exports = {
    register: [
        body('email').notEmpty().withMessage('El campo e-mail es obligatorio').bail()
        .isEmail().withMessage('El e-mail ingresado es inválido').bail()
        .custom(value => {
            return User.findOne({where:{email:value}})
            .then(user => {
                if(user){
                    return Promise.reject('E-mail ya existente');
                }
            })
        }),       
        body('name').notEmpty().withMessage('Debes indicar tu nombre').bail(), 
        body('lastName').notEmpty().withMessage('Debes indicar tu apellido').bail(), 


        body('userName').notEmpty().withMessage('El campo usuario no puede estar vacío').bail()
        .custom(value => {
            return User.findOne({where:{user_name:value}})
            .then(user =>{
                if(user){
                    return Promise.reject('Nombre de usuario ya existente');
                } 
            })
        }),
        /*.custom(value {
            //users = helper.getAllUsers();
            userExiste = await db.User.findOne({where:{user_name:value}});
            return !userExiste
        }).withMessage('Nombre de usuario ya existente').bail(),
        */
        body('image')
        .custom((value, { req }) => req.files[0])
        .withMessage('La imagen de perfil es obligatoria')
        .bail(),
        
        body('password').notEmpty().withMessage('El campo contraseña no puede estar vacío').bail()
        .isLength({min: 6, max:99}).withMessage('La contraseña debe tener como mínimo 6 caracteres').bail()
        .custom((value, {req} )=> {
            return value == req.body.passwordconfirm;
        }).withMessage('Las contraseñas ingresadas no son iguales').bail(),
       
        body('passwordconfirm').notEmpty().withMessage('Debes repetir la contraseña ingresada'),
    ], 
    
    login: [
        [
            body('email').notEmpty().withMessage('El campo e-mail es obligatorio').bail()
                .isEmail().withMessage('Ingrese un e-mail valido').bail()
                .custom((value, {req})=>{
                    return User.findOne({where:{email:value}})
                    .then(user => {
                        if(!user || !bcrypt.compareSync(req.body.password, user.password)) {
                           return Promise.reject('El usuario y la contraseña son incorrectos');
                        }
                    })
                    /*const userFound = users.filter(user => user.email == value);
                    if(userFound[0]){
                        return bcrypt.compareSync(req.body.password, userFound[0].password);
                    }
                    return false*/
                })           ,
            body('password').notEmpty().withMessage('El campo contraseña es obligatorio').bail()
        ],
    ],
    edit: [
        body('email').isEmail().withMessage('El e-mail ingresado es inválido').bail()
        .custom(value => {
            return User.findOne({where:{email:value}})
            .then(user => {
                if(user){
                    return Promise.reject('E-mail ya existente');
                }    
            })
        }),
        body('userName').custom(function (value) {
            return User.findOne({where:{user_name:value}})
            .then(user =>{
                if (user){
                    return Promise.reject('Nombre de usuario ya existente');
                }
            })
            
        }),
        body('image')
        .custom((value, { req }) => req.files[0])
        .withMessage('La imagen de perfil es obligatoria')
        .bail(),
        body('password').isLength({min: 6, max:99}).withMessage('La contraseña debe tener como mínimo 6 caracteres').bail()
        .custom((value, {req} )=> {
            return value == req.body.passwordconfirm;
        }).withMessage('Las contraseñas ingresadas no son iguales').bail(),
        body('passwordconfirm').notEmpty().withMessage('Debes repetir la contraseña ingresada')
    ]
}