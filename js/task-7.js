'use strict';


//----------------------------------------Підсумкова пам'ятка-------------------------------------------------------------------

//Пошук DOM - елементів

//element.querySelector(selector)    //- повертає перший елемент, який відповідає вказаному CSS селектору всередині елемента element.
//element.querySelectorAll(selector) //- повертає всі елементи, які відповідають вказаному CSS селектору всередині елемента element.

//Властивості DOM-елемента

//element.textContent //- містить текстовий вміст елемента element, ігноруючи всі теги HTML всередині.
//element.innerHTML   //- містить HTML-вміст елемента element.
//element.style      //- об'єкт, що містить вбудовані стилі елемента element, які можна змінювати динамічно з JavaScript.

//CSS класи на DOM-елементах

//element.classList.contains(className) //- перевіряє, чи міститься вказаний клас className на елементі element.
//element.classList.add(className)      //- додає клас className до списку класів елемента element.
//element.classList.remove(className)   //- видаляє клас className зі списку класів елемента element.
//element.classList.toggle(className)   //- додає клас className, якщо його немає, або видаляє, якщо він вже присутній, на елементі element.
//element.classList.replace(oldClassName, newClassName) //- замінює клас oldClassName на newClassName в списку класів елемента element.

//Атрибути

//Метод element.hasAttribute(nameAttribute)
//Метод element.getAttribute(nameAttribute)
//Метод element.setAttribute(nameAttribute, value)
//Метод element.removeAttribute(nameAttribute)

//Створення та видалення DOM-елементів

//document.createElement(tagName) //- створює новий HTML-елемент з вказаним ім'ям тегу tagName.
//element.append(el)              //- додає вміст (або елемент) до кінця списку дочірніх елементів element.
//element.prepend(el)            //- додає вміст (або елемент) до початку списку дочірніх елементів element.
//element.remove()              //- видаляє DOM-елемент з DOM дерева.
//insertAdjacentHTML(position, string)  //- додає вказаний рядок HTML після, перед, всередині або перед вказаним елементом.
//"beforebegin" — перед element
//"afterbegin" — всередині element, перед усіма дітьми
//"beforeend" — всередині element, після усіх дітей
//"afterend" — після element


//Події

//element.addEventListener(event, handler)    //- додає обробник події handler для події event на елемент element.
//element.removeEventListener(event, handler) //- видаляє обробник події handler для події event на елементі element.
//keydown  //- подія, яка виникає, коли клавіша на клавіатурі натиснута.
//submit   //- подія, яка виникає при відправці форми.
//change   //- подія, яка виникає при зміні значення елемента форми.
//input   //- подія, яка виникає при введенні даних в текстове поле.
//focus   //- подія, яка виникає, коли елемент отримує фокус.
//blur   //- подія, яка виникає, коли елемент втрачає фокус.

//----------------------------------------Підсумкова пам'ятка-------------------------------------------------------------------



// const link = document.querySelector(".link");
// const link = document.querySelector(`.link[data-act="save"]`);
// console.log(link.dataset.act);
// link.dataset.act = "update";
// console.log(link.dataset.act);
// console.log(link.href);

// const image = document.createElement("img");
// image.src = "https://picsum.photos/id/11/320/240";
// image.alt = "lalalalalal";
// image.classList.add("pict");
// image.classList.toggle("addddd");
// image.setAttribute("alt", "sfscsscsccs")
// console.log(image.attributes);
// console.log(image.classList);

// const header = document.createElement("h1");
// const body = document.querySelector("body");
// header.textContent = "I am Header";
// body.prepend(header);
// body.append(header);

// const text = document.querySelector(".text");
// text.remove();

// const article = document.querySelector(".article");
// console.log(article.innerHTML);
// const title = document.querySelector(".title");
// console.log(title.innerHTML);
// const text = document.querySelector(".text");
// console.log(text.innerHTML);
// const link = document.querySelector(" .link");
// console.log(link.innerHTML);

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");
// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");
// // Check the console, you'll see a single string with HTML tags
// console.log(markup);
// // Adding all the markup in one operation
// list.innerHTML = markup;


// const list = document.querySelector(".list");
// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");
// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

// const list = document.querySelector(".list");
// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//     .map((techno) => `<li class="list-item new">${techno}</li>`)
//     .join("");
// list.insertAdjacentHTML("beforebegin", markup);

//----------------------------------//----------------------------------//----------------------------------
// const addListenerBtn = document.querySelector('.js-add');
// const removeListenerBtn = document.querySelector('.js-remove');
// const btn = document.querySelector(".target-btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });


// const btn = document.querySelector(".js-add");

// const handle = () => {
// console.log("click event");
// };
// btn.addEventListener("click", handle);
// btn.removeEventListener("click", handle);

// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };
// button.addEventListener("click", handleClick);


// const registerForm = document.querySelector(".form");
// registerForm.addEventListener("submit", handleSubmit);
// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;
  
//   if (login === "" || password === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login}, Password: ${password}`);
//   form.reset();
// }

// const form = document.querySelector(".form");
// form.addEventListener("submit", handle);
// function handle (event) {
// event.preventDefault();
// const form = event.target;
// console.log(form);

// console.log(form.elements);

// const login = form.elements.login.value;
// console.log(login);

// const password = form.elements.password.value;

// if( login === "" || password === ""){
// return console.log("fill all field!");
// }
// console.log(`login ${login}, Password ${password}`);
// form.reset();
// };

// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");
// select.addEventListener("change", setOutput);
// function setOutput(event) {
//   const selectedOptionValue = event.currentTarget.value;
//   console.log(selectedOptionValue);
//   const selectedOptionIndex = event.currentTarget.selectedIndex;
//   console.log(selectedOptionIndex);
//   const selectedOptionText =
//     event.currentTarget.options[selectedOptionIndex].text;
// console.log(selectedOptionText);
//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// const textInput = document.querySelector(".text-input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener("click", () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
//   textInput.blur();
// });

// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
//   textInput.value = "";
// });

// const textInput = document.querySelector(".text-input");
// const setBtn = document.querySelector(`[data-action="set"]`); 
// const remBtn = document.querySelector(`[data-action="remove"]`);

// setBtn.addEventListener("click", () => {
// textInput.focus()});  

// remBtn.addEventListener("click", () => {
// textInput.blur();
//     });

// textInput.addEventListener("focus", () =>{
// textInput.value = "this input";
// });

// textInput.addEventListener("blur", () => {
//       textInput.value = "blur working";
//     });

//     console.log(document.activeElement.textInput);


// const list = document.getElementById("list");
// const btn = document.querySelector("button");
// btn.addEventListener("click", addItem);
// let count = 0;
// function addItem() {
//   count++;
//   const item = document.createElement("li");
//   item.textContent = `newElement${count}`;
//   list.append(item);
// };


// Напишіть функцію, яка перемикає видимість елемента <div> з ідентифікатором "content" при натисканні кнопки.

// Завдання:
// При натисканні кнопки показувати або приховувати блок.

// const content = document.getElementById("content");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", toggleVisibility);


// function toggleVisibility(){
//   content.classList.add("hide");
//   const item = document.querySelector(".hide");
//   item.style.opacity = 0;
//   content.classList.toggle(".hide");
// };