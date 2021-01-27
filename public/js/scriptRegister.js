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
    } //falta hacer que el e-mail sea valido y no se repita con otros ya registrados
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

    if (errors.length) {
        for (const error of errors) {
            errorsElement.innerHTML += "<li>"+ error + "</li>";
        }
        event.preventDefault();
    }
    
})



