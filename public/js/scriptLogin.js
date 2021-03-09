const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const errorsElement = document.querySelector(".errors");

form.addEventListener("submit", (event) => {
    const errors = [];

    errorsElement.innerHTML = '';

    if(password.value.trim().length <= 0) {
        errors.push('La contraseña es obligatoria')
    } 
    let regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!regex.test(email.value)){
        errors.push('ingrese un email valido')
    } 
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

        if(status == '400'){
            errors.push('El email y la contraseña no coinciden')

        }

        if (errors.length > 0) {
            for (const error of errors) {
                errorsElement.innerHTML += `<li>${error}</li>`

            }
        } else {
            form.submit()
        }
    })
        
        
        event.preventDefault();
    
    
})



