const form = document.querySelector('form');

const name = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const userName = document.querySelector('#userName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');

const errorsElement = document.querySelector(".errors");
 
form.addEventListener("submit", (e) => {
    const errors = [];
    errorsElement.innerHTML = '';
    if(name.value.trim().length < 3) {
        errors.push('El nombre debe tener más de 2 caracteres')
    }
    if (errors.length) {
        for (const error of errors) {
            errorsElement.innerHTML += "<li>"+ error + "</li>";
        }

        event.preventDefault();
    }
    

})



