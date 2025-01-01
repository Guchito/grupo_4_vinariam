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
const URL = process.env.URL || 'http://localhost:3000'

const errorsElement = document.querySelector(".errors");
 
 
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const errors = [];
    errorsElement.innerHTML = '';
    if (image.value != "") {
        const ext = this.image.files[0].type;
        if(!(ext == "image/jpeg" || ext == "image/png" || ext == "image/csv" || ext == "image/jpg")){
            errors.push('The avatar has an invalid extension');
        }
    }
    if(name.value.trim().length < 3) {
        errors.push('Name must have at least 3 characters')
    }
    if(lastName.value.trim().length < 3) {
        errors.push('Last name must have at least 3 characters')
    }
    if(userName.value.trim().length <= 0){
       errors.push('Username is required')
    }
    let regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!regex.test(email.value)){
        errors.push('Enter valid email')
    }
    const data1 = {email: email.value};
    let promiseEmail = fetch(`${URL}/api/users/checkEmail`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify(data1)
    })
    .then(function (response){
        return response.json();
    })
    const data2 = {userName: userName.value};
    let promiseUserName = fetch(`${URL}/api/users/checkUserName`, {
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
                errors.push('The email already exists')
            }
        }

        if(userName.value != userNameOld){
            if(statusUserName == 'Exist'){
                errors.push('Username already exists')
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
  
    
})