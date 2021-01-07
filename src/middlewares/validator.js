const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const helper = require('../helpers/helpers');

module.exports = {
    register: [
        body('email').notEmpty().withMessage('El campo e-mail es obligatorio').bail()
        .isEmail().withMessage('El e-mail ingresado es inválido').bail()
        .custom(value => {
            users = helper.getAllUsers();
            userExiste = users.find(user => user.email == value);
            return !userExiste
        }).withMessage('E-mail ya existente').bail(),
       
        body('name').notEmpty().withMessage('Debes indicar tu nombre').bail(), 
        body('lastName').notEmpty().withMessage('Debes indicar tu apellido').bail(), 


        body('userName').notEmpty().withMessage('El campo usuario no puede estar vacío').bail()
        .custom(value => {
            users = helper.getAllUsers();
            userExiste = users.find(user => user.userName == value);
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
        body('email').notEmpty().withMessage('El campo usuario es obligatorio').bail()
        .custom((value, {req}) => {
            users = helper.getAllUsers();
            mailExist = users.find(user => user.email.toLowerCase() == value.toLowerCase());
            userNameExist = users.find(user => user.userName.toLowerCase() == value.toLowerCase());
            if(mailExist) {
                return bcrypt.compareSync(req.body.password, mailExist.password);
            } else if(userNameExist) {
                return bcrypt.compareSync(req.body.password, userNameExist.password);
            } else{
                return false;
            }
            
        }).withMessage('El usuario y la contraseña no coinciden').bail(), 
        body('password').notEmpty().withMessage('El campo contraseña es obligatorio').bail(),
        
        
    ]
}