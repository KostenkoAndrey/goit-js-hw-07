'use strict';
const input = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// input.addEventListener("input", inputfunc);
// function inputfunc (event) {
//     if(event.target.value.trim() === ""){
//         return nameOutput.textContent = "Anonymous";
//     };
//     return nameOutput.textContent = event.target.value;
// };

input.addEventListener("input", (event) => {
    if(event.target.value.trim() === ""){
         nameOutput.textContent = "Anonymous";
         return;
    };
    nameOutput.textContent = event.currentTarget.value});    