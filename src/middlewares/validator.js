const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const helper = require('../helpers/helpers');
const db = require('../database/models')

module.exports = {
    register: [
        body('email').notEmpty().withMessage('El campo e-mail es obligatorio').bail()
        .isEmail().withMessage('El e-mail ingresado es inválido').bail()
        .custom(async function (value) {
            //users = helper.getAllUsers();
            userExiste = await db.User.findOne({where:{email:value}});
            return !userExiste
        }).withMessage('E-mail ya existente').bail(),
       
        body('name').notEmpty().withMessage('Debes indicar tu nombre').bail(), 
        body('lastName').notEmpty().withMessage('Debes indicar tu apellido').bail(), 


        body('userName').notEmpty().withMessage('El campo usuario no puede estar vacío').bail()
        .custom(async function (value) {
            //users = helper.getAllUsers();
            userExiste = await db.User.findOne({where:{user_name:value}});
            return !userExiste
        }).withMessage('Nombre de usuario ya existente').bail(),
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
        /*body('email').notEmpty().withMessage('El campo usuario es obligatorio').bail()
        .custom(async function(value, {req}){
            const mailExist = await db.User.findOne({where:{email:req.body.email}});
            const contraseña = bcrypt.compareSync(req.body.password, mailExist.password);
            console.log(mailExist)
            //let userNameExist = await db.User.findOne({where:{user_name:req.body.email}});
            //if(mailExist) {
                console.log("entre en el if")
                return contraseña
            // }else if(userNameExist) {
                //return bcrypt.compareSync(req.body.password, userNameExist.password);
            } console.log('no entre en el if')
            return false;
                  
        }).withMessage('El usuario y la contraseña no coinciden').bail(),*/
        /*body('email').notEmpty().withMessage('El campo usuario es obligatorio').bail()
        .custom(async function(value, {req}){
            const mailExist = await db.User.findOne({where:{email:req.body.email}});
            return(mailExist)
        }).withMessage('El usuario o contraseña incorrecto').bail(),
        body('password').notEmpty().withMessage('El campo contraseña es obligatorio').bail()
        .custom(async function(value,{req}){
                const mailExist = await db.User.findOne({where:{email:req.body.email}});
                const passExist = bcrypt.compareSync(req.body.password, mailExist.password);
                return (passExist)
            }
        )
        .withMessage('El usuario o contraseña incorrecto').bail()*/
        [
            body('email').notEmpty().withMessage('El campo e-mail es obligatorio').bail()
                .isEmail().withMessage('Ingrese un e-mail valido').bail()
                .custom(async(value, {req})=>{
                    const users = await db.User.findAll()
                    const userFound = users.filter(user => user.email == value);
                    if(userFound[0]){
                        return bcrypt.compareSync(req.body.password, userFound[0].password);
                    }
                    return false
                }).withMessage('El usuario y la contraseña son incorrectos').bail(),
            body('password').notEmpty().withMessage('El campo contraseña es obligatorio').bail()
        ],
    ],
    edit: [
        body('email').isEmail().withMessage('El e-mail ingresado es inválido').bail()
        .custom(async function (value) {
            userExiste = await db.User.findOne({where:{email:value}});
            if (userExiste){
                return userExiste
            };
            return !userExiste
        }).withMessage('E-mail ya existente').bail(),
        body('userName').custom(async function (value) {
            userExiste = await db.User.findOne({where:{user_name:value}});
            return !userExiste
        }).withMessage('Nombre de usuario ya existente').bail(),
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