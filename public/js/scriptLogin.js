const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const URL = process.env.URL || 'http://localhost:3000'

const errorsElement = document.querySelector(".errors");

form.addEventListener("submit", (event) => {
    const errors = [];

    errorsElement.innerHTML = '';

    if(password.value.trim().length <= 0) {
        errors.push('Password is required')
    } 
    let regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!regex.test(email.value)){
        errors.push('Inster valid email')
    } 
    const data = {email: email.value, password: password.value};
    fetch(`${URL}/api/users/login`, {
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
            errors.push('Email and password dont match')

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



