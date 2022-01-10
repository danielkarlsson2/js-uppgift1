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
    }
    else if (input.value.trim().length < 2) {
        setError(input, 'Du måste ange minst två bokstäver')         
    }
    else {
        setSuccess(input)
    }
}
const validateEmail = email => {
   let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
    if(email.value.trim() === '') {
        setError(email, 'Du måste ange en emailadress')
    }
    else if(!regEx.test(email.value)) {
        setError(email, 'Otillåten emailadress')
    }
    else {        
        setSuccess(email)
    
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
    // const parent = input.parentElement;
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  
}

// ----- Spara i lista -----
let user = [];


// let userObjects = [{
//     firstName: firstName.value, 
//     lastName: lastName.value,
//     email: email.value,
//     id: 0
// }



// const createList = () => {
//     for (i = 0; i < userObjects.length; i++) {
//         let listItem = document.createElement('li');
//         // listItem.className = 'unstyled';
//         output.appendChild(listItem);
//     }
// }


//  ----- END Spara -----





// let addInfo = function () {

//     const li = document.createElement('li');    
//     // const info = document.createTextNode(firstName.value + ' ' + lastName.value);
//     const info = document.createTextNode(userObjects.value);

//     li.appendChild(info);
//     li.classList.add('unstyled', 'list-group-item', 'list-group-item-info');
    
//     const listItem = document.getElementById("output");
//     listItem.appendChild(li)
//     // li.appendChild(text);
//     // output.appendChild(li);
//     // console.log(output);
//     // li.appendChild(user);

//     // output.innerHTML =  
//     // `<li id="firstNameOutput" class="list-unstyled">${firstName.value} ${lastName.value}</li>
//     // <li id="emailOutput" class="list-unstyled">${email.value}</li>`

//     // ` <div id="firstNameOutput">${firstName.value}  ${lastName.value}</div>
//     // <div id="emailOutput">${email.value}</div>`
// }


// Test 1-----
function myFunction(list){
    let text = "";
    let textEmail = "";
    let input = document.querySelectorAll("input");
    textEmail = input[2].value;
    // // let input = 
    // for (var i = 0; i < input.length; i++) {
    //     // text += input[i].value;
    //     // text += input[i].value;
    // }
    text += input[0].value + ' ' + input[1].value + ' ' + textEmail;
    
    
    let li = document.createElement("li");
    let node = document.createTextNode(text);
    li.appendChild(node);
    document.getElementById("output").appendChild(li);
    

}

// Test 2
/* const newInput = document.createElement('li');
newInput.setAttribute("id", "firstNameOutput");
output.appendChild(newInput)
document.getElementById(output).innerHTML */






regForm.addEventListener('submit', (e) => {
    e.preventDefault();

   let user = {
        firstName: e.currentTarget.firstName.value,
        lastName: e.currentTarget.lastName.value,
        email: e.currentTarget.email.value,
        id: '1'
    }

    
    // submitValid();
    
    validateName(firstName); 
    validateName(lastName); 
    // validateLastName(lastName);
    validateEmail(email);
    myFunction();
    
    console.log(user);
    
    // output.innerHTML = ` 
    // <div id="firstNameOutput">${firstName.value}  ${lastName.value}</div>
    // <div id="emailOutput">${email.value}</div>`    

    // regForm.reset();

})


// btn.addEventListener('click', () => {
    

//     output.innerHTML = 
//     ` 
//     <div id="firstNameOutput">${firstName.value}  ${lastName.value}</div>
//     <div id="emailOutput">${email.value}</div>`    
    
// })
