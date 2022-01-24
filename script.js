// ----- Variablar -----
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const regForm = document.querySelector('#regForm');
const output = document.querySelector('#output');
const listElement = document.querySelector('#listElements');


const btn = document.querySelector('#submit');
const btnChange = document.getElementsByClassName('.change')
const save = document.querySelector('#btn-save');


const error = document.querySelector('#error');

const lista = document.querySelector('#lista');
const items = document.getElementsByClassName('.input-list');
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
    else if (users.includes(email.value)) {
        setError(input, 'Mailadressen finns redan.')
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

}
const setSuccess = (input) => {
    const parent = input.parentElement;
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    parent.querySelector('.feedback').innerText = '';
  
}


// ----- Spara i lista -----
let users = [];

/* const emailUnique = (input) => {
    if (users.includes(input.value)){
        setError(input, 'Mailadressen finns redan.')
    }
    else {
        setSuccess(input)
        return true;
    }
} */
    
const insertDomElement = (user) => {
    // output.innerHTML += ;            
        output.insertAdjacentHTML('afterbegin', `
        <div class="lista mb-3" id="${user.id}">

            <div class="input-list">

                <div class="userInput">
                    <li class="textOutput">${user.firstName} ${user.lastName}</li>
                    <li class="emailOutput">${user.email}</li>
                </div>

                <div class="btn-remove">
                    <button type="submit" class="btn btn-primary btn-delete" id="u">X</button>
                </div>
            </div>
            
            <div class="buttons mt-0">
                <button type="button" class="btn btn-primary change mt-3" id="c${user.id}">Ändra</button>
                <button type="button" class="btn btn-primary save mt-3" id="btn-save">Spara</button>
            </div>

        </div>        

        <br>`)
}
const addChangeClick = (user) => {
    document.querySelector(`#c${user.id}`).addEventListener('click', () => {
        
        // document.getElementsByClassName('.change').innerHTML = "Spara";
        refUser = user;
        firstName.value = user.firstName;
        lastName.value = user.lastName;
        email.value = user.email;                               
    })      

}
let refUser;

const listInput = () => {
    output.innerHTML = '';
    users.forEach(user => {
            insertDomElement(user)
            addChangeClick(user)
       /*  document.querySelector(`#u${user.id}`).addEventListener('click', () => {
           users = users.filter(_user => _user.id !==user.id);     
           console.log('DELETE');
           listInput(users);
           
           
        }) */
          

        firstName.focus()
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
        
        
        console.log(users);
        users.push(user);

        firstName.value = '';
        lastName.value = '';
        email.value = '';
        firstName.classList.remove('is-valid');
        lastName.classList.remove('is-valid');
        email.classList.remove('is-valid');

        listInput();   
        // insertDomElement(user);
        // addChangeClick(user)
    }
    
    })

    // ----- DELETE User
output.addEventListener('click', e => {
    // console.log(e.target.parentNode.parentNode.parentNode)
    if(e.target.type === 'submit') {
        console.log('detta är en submit')
        users = users.filter(user => user.id !== e.target.parentNode.parentNode.parentNode.id)           
        listInput();
    }
        /* else if(e.target.type === 'button') {
            console.log(e.target.parentNode.parentNode)
            // users = users.filter(user => user.id !== e.target.parentNode.parentNode.id)      
                firstName.value = user.firstName;
                lastName.value = user.lastName;
                email.value = user.email;     
                listInput();
        } */
            
})
    // ----- Change User

  
    








// function removeList(id) {
//     users = users.filter(user => user.id !== id)
//     listInput()
// }
// const createInputElement = user => {
//     let card = document.createElement('div');
//     card.classList.add('lista');

//     let innerCard = document.createElement('div');
//     innerCard.classList.add('input-list')

//     let inputField = document.createElement('div');
//     inputField.classList.add('userInput');

//     let listInput = document.createElement('li');
//     listInput.classList.add('textOutput');

//     let emailInput = document.createElement('li');
//     emailInput.classList.add('emailOutput');

//     card.appendChild(innerCard);
//     innerCard.appendChild(inputField);
//     inputField.appendChild(listInput);

//     output.appendChild

//     return card;
// }
