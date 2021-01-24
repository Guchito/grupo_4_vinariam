const form = document.querySelector('form');

const name = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const userName = document.querySelector('#userName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');
const image = document.querySelector('#image');

const errorsElement = document.querySelector(".errors");
 
form.addEventListener("submit", (e) => {
    const errors = [];
    errorsElement.innerHTML = '';
    if(email.value.trim().length <= 0){
        errors.push('El email es obligatorio')
    } //falta hacer que el e-mail sea valido 
    if(password.value.trim().length <= 0) {
        errors.push('La contraseña es obligatoria')
    } //falta hacer que la contraseña coincida con el e.mail en la db
    
    if (errors.length) {
        for (const error of errors) {
            errorsElement.innerHTML += "<li>"+ error + "</li>";
        }

        event.preventDefault();
    }
    

})



