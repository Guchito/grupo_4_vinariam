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
    if(password.value.trim().length < 8) {
        errors.push('La contraseña debe tener más de 8 caracteres')
    }
    if (image.value == "") {
        errors.push('El avatar es obligatorio');
    } else {
        const ext = this.image.files[0].type;
        if(!(ext == "image/jpeg" || ext == "image/png" || ext == "image/csv" || ext == "image/jpg")){
            errors.push('El avatar tiene una extensión inválida');
        }
    }
    if(name.value.trim().length < 3) {
        errors.push('El nombre debe tener más de 2 caracteres')
    }
    if(lastName.value.trim().length < 3) {
        errors.push('El apellido debe tener más de 2 caracteres')
    }
    if(lastName.value.trim().length <= 0){
       errors.push('El nombre de usuario es obligatorio')
    }
    if(email.value.trim().length <= 0){
        errors.push('El email es obligatorio')
    } else {
    const data = {email: email.value};
    fetch('http://localhost:3000/api/users/checkEmail', {
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
        if(status == 'Exist'){
          errors.push('El email ya esta en uso')
          console.log('Entre en el push')
          console.log(errors);
          return;
        } 
        form.submit();
        
    })
    }

    if (errors.length > 0) {
        for (const error of errors) {
            errorsElement.innerHTML += `<li>${error}</li>`
            console.log(error)
        }
        event.preventDefault();
    }
    
})



