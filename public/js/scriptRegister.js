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
    //falta extension valida
    if (image.value == "") {
        errors.push('El avatar es obligatorio');
    } else {
        console.log(image);
        /*if (!(extension == '.jpg' || extension == '.png' || extension == '.jpeg' || extension == '.svg')) {
            errors.push('El formato de la imagen no es correcto');
            
        }*/
    }

    if (errors.length) {
        for (const error of errors) {
            errorsElement.innerHTML += "<li>"+ error + "</li>";
        }
        event.preventDefault();
    }
    
})



