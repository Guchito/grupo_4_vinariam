const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const { User } = require('../database/models')
const path = require('path') 

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
        body('name').notEmpty().withMessage('Debes indicar tu nombre').bail()
        .isLength({min: 2, max:99}).withMessage('Tu nombre debe tener como mínimo 2 caracteres').bail(),
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
        body('image')
        .custom((value, { req }) => req.files[0])
        .withMessage('La imagen de perfil es obligatoria')
        .bail()
        .custom((value, {req}) => {
            const extensionesOk = ['.jpg', '.png','.jpeg', '.gif', '.svg'];
            const extensionSubida = path.extname(req.files[0].originalname);
            return extensionesOk.includes(extensionSubida);

        }).withMessage("La extension no es valida").bail(),
        body('terminos').custom(value => {
            return value;

        }).withMessage('Debes aceptar los términos y condiciones del sitio').bail(),
        
        body('password').notEmpty().withMessage('El campo contraseña no puede estar vacío').bail()
        .isLength({min: 8, max:99}).withMessage('La contraseña debe tener como mínimo 8 caracteres').bail()
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
                }),
            body('password').notEmpty().withMessage('El campo contraseña es obligatorio').bail()
        ],
    ],
    edit: [
        body('email').isEmail().withMessage('El e-mail ingresado es inválido').bail()
        .custom((value, {req})=> {
            if(req.session.email != value){
                return User.findOne({where:{email:value}})
                .then(user => {
                    if(user){
                        return Promise.reject('E-mail ya existente');
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
                            return Promise.reject('Nombre de usuario ya existente');
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
        
       /* body('newPassword').custom((value, {req}) => {
            if(value != ''){
                body(value).isLength({min: 6, max:99}).withMessage('La contraseña debe tener como mínimo 6 caracteres').bail()
                .custom((value, {req} )=> {
                    return value == req.body.newPasswordConfirm;
                }).withMessage('Las contraseñas ingresadas no son iguales').bail(),
        
                body('newPasswordConfirm').notEmpty().withMessage('Debes repetir la contraseña ingresada')
            }
        })
        
        

        body('password').notEmpty().withMessage('Ingrese su contraseña para confirmar cambios').bail()
        .custom((value, {req})=>{
            return User.findOne({where:{email:req.session.email}})
            .then(user =>{
                if(!bcrypt.compareSync(req.body.password, user.password)) {
                    return Promise.reject('Contraseña incorrecta');
                }
            })

        }).withMessage('Contraseña incorrecta').bail()*/

    ], 
    editPassword:[
        body('newPassword').notEmpty().withMessage('El campo contraseña no puede estar vacío').bail()
        .isLength({min: 8, max:99}).withMessage('La contraseña debe tener como mínimo 8 caracteres').bail()
        .custom((value, {req} )=> {
            return value == req.body.newPasswordConfirm;
        }).withMessage('Las contraseñas ingresadas no son iguales').bail(),
        
        body('newPasswordConfirm').notEmpty().withMessage('Debes repetir la contraseña ingresada'),
        
        body('oldPassword').notEmpty().withMessage('Tenes que ingresar tu contraseña actual').bail()
        .custom((value, {req}) => {
            console.log(req.body.oldPassword)
            return User.findOne({where:{email:req.session.email}})
            .then(user => {
                if(!bcrypt.compareSync(req.body.oldPassword, user.password)) {
                   return Promise.reject('La contraseña es incorrecta');
                }
            })
        })


    ],


    editProduct:[
        //body('name').notEmpty().withMessage('El nombre no puede estar vacio').bail()
        //.isLength({min: 5, max:99}).withMessage('El nombre debe tener como mínimo 5 caracteres').bail(),
        body('detail').isLength({min: 20}).withMessage('La descripcion debe tener como mínimo 20 caracteres').bail(),
        body('image').custom((value, {req}) => {
            if (req.files[0]){
            const extensionesOk = ['.jpg', '.png','.jpeg', '.gif', '.svg'];
            const extensionSubida = path.extname(req.files[0].originalname);
            return extensionesOk.includes(extensionSubida);
            }else {
                return true;
            }

        }).withMessage("La extension no es valida").bail()
        .custom((value, { req }) => req.files[0]).withMessage('La imagen de perfil es obligatoria').bail()
    ]
    
}