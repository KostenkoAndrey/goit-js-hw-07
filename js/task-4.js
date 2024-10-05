'use strict';

const form = document.querySelector(".login-form");
form.addEventListener("submit", formFunc);

function formFunc(event){
event.preventDefault();
const elements = event.target.elements;
const password = elements.password.value.trim();
const email = elements.email.value.trim();
// const obj = {};

if(password === "" || email === ""){
     alert("All form fields must be filled in");
     return;
}; 
console.log({email: email, password: password});
    // obj.email = email;
    // obj.password = password;
    // console.log(obj);
form.reset();
};
    
