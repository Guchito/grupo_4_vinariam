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
       
        body('userName').notEmpty().withMessage('El campo usuario no puede estar vacío').bail()
        .custom(value => {
            users = helper.getAllUsers();
            userExiste = users.find(user => user.userName == value);
            return !userExiste
        }).withMessage('Nombre de usuario ya existente').bail(),
        
        body('password').notEmpty().withMessage('El campo contraseña no puede estar vacío').bail()
        .isLength({min: 6, max:99}).withMessage('La contraseña debe tener como mínimo 6 caracteres').bail()
        .custom((value, {req} )=> {
            return value == req.body.passwordconfirm;
        }).withMessage('Las contraseñas ingresadas no son iguales').bail(),
       
        body('passwordconfirm').notEmpty().withMessage('Debes repetir la contraseña ingresada'),
    ], 
    
    login: [
        body('email').notEmpty().withMessage('El campo e-mail es obligatorio').bail()
        .custom((value, {req}) => {
            users = helper.getAllUsers();
            userExiste = users.find(user => user.email == value);
            if(userExiste) {
                return bcrypt.compareSync(req.body.password, userExiste.password);
            } else {
                return false;
            } 
            
        }).withMessage('El email y la contraseña no coinciden').bail()
    ]
}