// ----- Variablar -----
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const regForm = document.querySelector('#regForm');
const output = document.querySelector('#output');
const btn = document.querySelector('#submit');

const error = document.querySelector('#error');


// ----- Validering -----

const validateName = (input) => {     
    
    if(input.value.trim() === '') {
        setError(input, 'Du måste ange ett namn')        
        return false;
    }
    else if (input.value.trim().length < 2) {
        setError(input, 'Du måste ange minst två bokstäver')        
        return false ;
    }
    else {
        setSuccess(input)
        return true;
    }
}



const validateEmail = email => {
   let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
    if(email.value.trim() === '') {
        setError(email, 'Du måste ange en emailadress')
        return false;
    }
    else if(!regEx.test(email.value)) {
        setError(email, 'Otillåten emailadress')
        return false;
    }
    else {        
        setSuccess(email)
        return true;
    
    }
}


// ----- END  -----

// ----- Feedback funktioner -----
const setError = (input, textMessage) => {
   const parent = input.parentElement;
   input.classList.add('is-invalid');
   input.classList.remove('is-valid');
   parent.querySelector('.feedback').innerText = textMessage;
//    const parent = input.previousElementSibling;
//    parent.classList.add('is-invalid');
//    parent.classList.remove('is-valid');
//    parent.querySelector('.feedback').innerText = textMessage;
}
const setSuccess = (input) => {
    const parent = input.parentElement;
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    parent.querySelector('.feedback').innerText = '';
  
}

// ----- Spara i lista -----
let users = [];

const listInput = () => {
    output.innerHTML = '';
    users.forEach(user => {
        output.innerHTML += `
        <div class="lista">
        <li class="textOutput">${user.firstName} ${user.lastName}</li>
        <li class="emailOutput">${user.email}</li>
        <div class="buttons">
        <button type="submit" class="btn btn-primary change">Ändra</button>
        <button type="submit" class="btn btn-primary save">Spara</button>
        </div>
        </div>
        

        <br>`;
    })
}



//  ----- END Spara -----




const validate = input => {
    switch(input.type) {
        case 'text': return validateName(input)             
        case 'email': return validateEmail(input)
        default:
            break;
    }
}


regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let errors = []

    for(let i = 0; i < regForm.length; i++) {
        errors[i] = validate(regForm[i])
    }
    console.log(errors);

    if(!errors.includes(false)) {
        
        user = {
            id: Date.now().toString(),
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value
            }            
            
        }
        
        console.log(user);
        users.push(user);
        listInput();
        
    
    })
