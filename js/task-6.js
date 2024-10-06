'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const input = document.querySelector("#controls input");
// const btnSet = document.querySelector(`button[data-create="set"]`);
// const btnRem = document.querySelector(`button[data-destroy="remove"]`);
// const container = document.getElementById("boxes");


// btnSet.addEventListener("click", setCont);
// btnRem.addEventListener("click", remCont);

// function setCont() {
// container.innerHTML = "";
// const value = Number(input.value);

// if(1 > value || value > 100) {
//   alert("Not Allowed Number");
//   return;
// };


// for(let i = 0; i < value; i++) {
// const newcont = document.createElement("div");
// newcont.style.backgroundColor = getRandomHexColor();
// newcont.style.width = `${30 + i * 10}px`;
// newcont.style.height = `${30 + i * 10}px`;
// container.append(newcont);
// };

// input.value = "";
// };

// function remCont(){
//   container.innerHTML = "";
// };