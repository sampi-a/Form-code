const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//funcion para mostrar "error"
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
//funcion para mostrar "success"
function showSuccess(input) {
    formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// comprobar funcion
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, 'Rellene este campo');
        } else {
            showSuccess(input);
        }
    });
}
// comprobar email
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    if (input.value.trim() === '') {
        showError(input, 'Rellene este campo');
    }
    else if (!re.test(input.value.trim())) {
        showError(input, 'Email inválido')
    } else {
        showSuccess(input);
    }
}

//max length contraseña
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, 'Rellene este campo');
    }
    else if (input.value.length > max) {
        showError(input, 'No debe tener más de 8 characteres');
    } else {
        showSuccess(input);
    }
}

// comprobar contraseñas
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Las contraseñas no coinciden');
    }
}

//nombre de campo
function fieldName(input) {
    return input.id.carAT(0).toUpperCase() + input.id.slice(1);
}

//validar formulario
function validation() {
   alert ('Tu inscripcion se ha recibido correctamente');
}

//seguidor de eventos
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([name, email, password, password2]);
    checkLength(password, 1, 8);
    checkEmail(email);
    checkPasswordsMatch(password, password2);

});

