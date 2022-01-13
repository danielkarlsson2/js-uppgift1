// ----- Variablar -----
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const regForm = document.querySelector('#regForm');
const output = document.querySelector('#output');
const listElement = document.querySelector('#listElements');
const lista = document.querySelector('#lista');


const btn = document.querySelector('#submit');
const btnChange = document.querySelector('#btn-change')

const error = document.querySelector('#error');
const deleteButton = document.querySelector('#removeButton');


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
        <div class="lista" id="lista">

            <div class="input-list">

                <div class="userInput">
                    <li class="textOutput">${user.firstName} ${user.lastName}</li>
                    <li class="emailOutput">${user.email}</li>
                </div>

                <div class="btn-remove">
                    <button type="submit" class="btn btn-primary btn-delete" id="removeButton">X</button>
                </div>
            </div>
            
            <div class="buttons">
                <button type="button" class="btn btn-primary change" id="btn-change">Ändra</button>
                <button type="button" class="btn btn-primary save d-none">Spara</button>
            </div>

        </div>
        

        <br>`;
    })
}
//  ----- END Spara -----
//  ----- Ändra med knapp -----




// ----- Ändra END -----



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
        
        
        console.log(user);
        users.push(user);

        firstName.value = '';
        lastName.value = '';
        email.value = '';
        firstName.classList.remove('is-valid');
        lastName.classList.remove('is-valid');
        email.classList.remove('is-valid');

        listInput();   
    }
    
    })

    output.addEventListener('click', e => {
        if(e.target.type === 'button') {
            users = users.filter(user => user.id !==e.target.parentNode.id)           
            
            listInput();
        }
    })
// deleteButton.onclick = () => {
//     parentElement.remove(lista)
// }
  
    

