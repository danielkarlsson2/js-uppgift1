// ----- Variablar -----
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');


const regForm = document.querySelector('#regForm');

const user = [
    {firstName},
    {lastName},
    {email}
]



// ----- Validering -----
const validate = (id) => {
    const input = document.querySelector(id);
    const error = document.querySelector(id + '-error');

    if(input.value === '') {
        error.innerText = 'Du måste ange ett namn';
    }
}
const validateEmail = (emailInput) => {
    const input = document.querySelector('#email');
    const error = document.querySelector('#email-error');
    
    if(input.value === '') {
        error.innerText = 'Du måste ange en emailadress';
    }
}

// ----- Validering -----



console.log(user);

regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    validate('#firstName');
    validate('#lastName');
    validateEmail();
})