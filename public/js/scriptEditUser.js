const form = document.querySelector('form');
const name = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const userName = document.querySelector('#userName');
const email = document.querySelector('#email');
const emailOld = email.value;
const userNameOld = userName.value;
const password = document.querySelector('#newPassword');
const passwordConfirm = document.querySelector('#NewPasswordConfirm');
const image = document.querySelector('#image');

const errorsElement = document.querySelector(".errors");
 
 
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const errors = [];
    errorsElement.innerHTML = '';
    if (image.value != "") {
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
    if(userName.value.trim().length <= 0){
       errors.push('El nombre de usuario es obligatorio')
    }
    let regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!regex.test(email.value)){
        errors.push('Ingrese un email valido')
    }
    const data1 = {email: email.value};
    let promiseEmail = fetch('http://localhost:3000/api/users/checkEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify(data1)
    })
    .then(function (response){
        return response.json();
    })
    const data2 = {userName: userName.value};
    let promiseUserName = fetch('http://localhost:3000/api/users/checkUserName', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify(data2)
    })
    .then(function (response){
        return response.json();
    })
    Promise.all([promiseEmail, promiseUserName])
    .then(([promiseEmail, promiseUserName]) => {
        const statusEmail = promiseEmail.meta.status;
        const statusUserName = promiseUserName.meta.status;
        if(email.value != emailOld) 
        {
            if(statusEmail == 'Exist'){
                errors.push('El email ya esta en uso')
            }
        }

        if(userName.value != userNameOld){
            if(statusUserName == 'Exist'){
                errors.push('El nombre de usuario ya esta en uso')
            } 
        }
        if (errors.length > 0) {
            for (const error of errors) {
                errorsElement.innerHTML += `<li>${error}</li>`
            }
        } else {
            form.submit()
        }


    })
    
 
        
    
    //Falta validar username
    //Falta validar e-mail, si pertenece al user en este form hay que dejarlo pasar
    //Falta ver el tema del password
  
    
})