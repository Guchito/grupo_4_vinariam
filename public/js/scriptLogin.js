const form = document.querySelector('form');

const name = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const userName = document.querySelector('#userName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');
const image = document.querySelector('#image');

const errorsElement = document.querySelector(".errors");
 
form.addEventListener("submit", (event) => {
    const errors = [];

    errorsElement.innerHTML = '';

    if(email.value.trim().length <= 0){
        errors.push('El email es obligatorio')
    } else if(password.value.trim().length <= 0) {
        errors.push('La contraseña es obligatoria')
    } else {
        const data = {email: email.value, password: password.value};
        fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(function (response){
            return response.json();
        })
        .then(function(check){
            const status = check.meta.status;
            console.log('hola soy el estupido status: ' + status);
            if(status == 400){
              errors.push('El email ya esta en uso')
            }; 
        })
        .catch(error => console.error('Error'))
        } 
    
    if (errors.length) {
        for (const error of errors) {
            errorsElement.innerHTML += `<li>${error}</li>`;
        }
        console.log(errors);
    }

    event.preventDefault();
    

})



