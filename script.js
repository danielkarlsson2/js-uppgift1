// ----- Variablar -----
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');


const regForm = document.querySelector('#regForm');

const output = document.querySelector('#output');




// ----- Validering -----
const validateFirstName = (fNameInput) => {
    const input = document.querySelector('#firstName');
    const error = document.querySelector('#firstName-error');

    if(input.value === '') {
        error.innerText = 'Du måste ange ett namn';
        firstName.classList.add('invalid');        
    }
}
const validateLastName = (lNameInput) => {
    const input = document.querySelector('#lastName');
    const error = document.querySelector('#lastName-error');

    if(input.value === '') {
        error.innerText = 'Du måste ange ett namn';
        lastName.classList.add('invalid');        
    }
}
const validateEmail = (emailInput) => {
    const input = document.querySelector('#email');
    const error = document.querySelector('#email-error');
    
    if(input.value === '') {
        error.innerText = 'Du måste ange en emailadress';
        email.classList.add('invalid');
    }
}

// ----- Minst två tecken validering -----
// document.querySelector('#submit').disabled = true;   
// document.querySelector('#regForm').addEventListener('keyup', e => {
    
//     // if (e.target.value == "") {
//     // if (firstName.value.length < 2 && lastName.value.length < 2) {
//     if (firstName.value.length < 2) {
//       document.querySelector('#submit').disabled = true;
//     }
//     else if (lastName.value.length < 2) {
//         document.querySelector('#submit').disabled = true;
//     }
//     else {
//       document.querySelector('#submit').disabled = false;
//     }
//   });




// regForm.addEventListener()



// ----- END  -----





let user = [];

// let user = [
//     {firstName: ''},
//     {lastName: ''},
//     {email: ''},
//     {id: ''},
// ]


regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    user = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        id: '1'
    }
    // submitValid();
    
    validateFirstName(); 
    validateLastName();
    validateEmail();
    
    console.log(user);

    
    output.innerHTML = ` 
    <div id="firstNameOutput">${firstName.value}  ${lastName.value}</div>
    <div id="emailOutput">${email.value}</div>`    

    // regForm.reset();

})
