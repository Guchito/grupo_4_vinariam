const form = document.querySelector('form');
const name = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const userName = document.querySelector('#userName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');
const image = document.querySelector('#image');
const URL = process.env.URL || 'http://localhost:3000'
const errorsElement = document.querySelector(".errors");
 
form.addEventListener("submit", (event) => {
    const errors = [];
    errorsElement.innerHTML = '';
    if(password.value.trim().length < 8) {
        errors.push('Password must have at least 8 characters')
    }
    if (image.value == "") {
        errors.push('Avatar is required');
    } else {
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
    if(lastName.value.trim().length <= 0){
       errors.push('Username is required')
    }
    let regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!regex.test(email.value)){
        errors.push('Enter valid email')
    }
    const data = {email: email.value};
    fetch(`${URL}/api/users/checkEmail`, {
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
        if(status == 'Exist'){
          errors.push('Email already in use')
          console.log(errors);
        } 

        if (errors.length > 0) {
            for (const error of errors) {
                errorsElement.innerHTML += `<li>${error}</li>`
                console.log(error)
            }
        } else {
            form.submit()
        }
    })
    
    event.preventDefault();
    
})



