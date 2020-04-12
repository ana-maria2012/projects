//const
const email = document.getElementById('email');
const subject = document.getElementById('asunto');
const message = document.getElementById('mensaje');
const send = document.getElementById('enviar');
const form = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

//listeners
function eventListeners() {
    document.addEventListener('DOMContentLoaded', initApp);

    //fields
    email.addEventListener('blur', inputFilled);
    subject.addEventListener('blur', inputFilled);
    message.addEventListener('blur', inputFilled);
    resetBtn.addEventListener('blur', resetForm);

    form.addEventListener('submit', sendForm);

}

eventListeners();

//functions
function initApp() {
    send.disabled = true;
}

function inputFilled(e) {
    let errores = document.querySelectorAll('.error');

    if (email.value !== '' && subject.value !== '' && message.value !== '') {
        if  (errores.length === 0) {
            send.disabled = false;
        }
    }

    validateEmail(email);
    validateLength(this);
}

function validateLength(element) {
    if (element.value.length <= 0) {
        element.style.borderBottomColor = 'red';
        element.classList.add('error');
    } else {
        element.style.borderBottomColor = 'green';
        element.classList.remove('error');
    }
}

function validateEmail(email) {
    if (email.value.indexOf('@') === -1) {
        email.style.borderBottomColor = 'red';
        email.classList.add('error');
    } else {
        email.style.borderBottomColor = 'green';
        email.classList.remove('error');
    }
}

function sendForm(e) {
    const spinner = document.getElementById('spinner');
    const sent = document.createElement('img');
    const containerGifs = document.getElementById('loaders');
    spinner.style.display = 'block';


    sent.src = 'img/mail.gif';
    sent.style.display = 'block';


    setTimeout(function() {
        containerGifs.appendChild(sent);
        spinner.style.display = 'none';

        setTimeout(function() {
            sent.remove();
            form.reset();
        }, 5000)
    }, 3000);

    e.preventDefault();
}

function resetForm(e) {
    form.reset();
    e.preventDefault();
}