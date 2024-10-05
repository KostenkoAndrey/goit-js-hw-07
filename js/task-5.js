'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector(`button[data-action = "change"]`);
const colorString = document.querySelector(".color");

btn.addEventListener("click", changeColor);

function changeColor() {
const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorString.textContent = newColor;
};


