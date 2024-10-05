'use strict';
const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach(item => {
const catName = item.querySelector('h2').textContent;
const catLenght = item.querySelectorAll('ul li').length;
console.log(`Category: ${catName}`);
console.log(`Elements: ${catLenght}`);
});


