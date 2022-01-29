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

    
const insertDomElement = (user) => {
    // output.innerHTML += ;            
        output.insertAdjacentHTML('afterbegin', `
        <div class="lista mb-3" id="user${user.id}">

            <div class="input-list">

                <div class="userInput">
                    <li class="textOutput">${user.firstName} ${user.lastName}</li>
                    <li class="emailOutput">${user.email}</li>
                </div>

                <div class="btn-remove">
                    <button type="submit" class="btn btn-primary btn-delete" id="delete${user.id}">X</button>
                </div>
            </div>
            
            <div class="buttons mt-0">
                <button type="button" class="btn btn-primary change mt-3" id="c${user.id}">Ändra</button>
                <button type="button" class="btn btn-primary save mt-3" id="save${user.id}">Spara</button>
            </div>

        </div>        

        <br>`)
}

// ----- Knappar -----
const deleteUser = (user) => {
    document.querySelector(`#delete${user.id}`).addEventListener('click', function() {
             
        this.parentNode.parentNode.parentNode.remove()
        users.splice(users.indexOf(user), 1)
        console.log(users);
        
    })
}

const addChangeClick = (user) => {
    document.querySelector(`#c${user.id}`).addEventListener('click', () => {
        
        // document.getElementsByClassName('.change').innerHTML = "Spara";
        refUser = user;
        firstName.value = user.firstName;
        lastName.value = user.lastName;
        email.value = user.email;       
        
        document.querySelector(`#save${user.id}`).addEventListener('click', function() {
                      
            user.firstName = firstName.value;
            user.lastName = lastName.value;
            user.email = email.value;

            firstName.value = ''
            lastName.value = ''
            email.value = ''
            console.log(users);
            listInput();
        })
    })      
}
// ----- Knapp END -----

let refUser;


const listInput = () => {
    output.innerHTML = '';
    users.forEach(user => {
        insertDomElement(user)
        addChangeClick(user)          
        deleteUser(user)     
        // saveChange(user)
        firstName.focus()
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
    // console.log(errors);

    if(!errors.includes(false)) {
        
        user = {
            id: Date.now().toString(),
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value
            }                      
        
        users.push(user);
        console.log(users);

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