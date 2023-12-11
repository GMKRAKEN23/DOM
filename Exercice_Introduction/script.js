//---------------modidy_element------------------
const h1 = document.querySelector("h1");

console.log("Contenu textuel de l'élément :", h1.textContent);

h1.textContent = "Modifying the DOM";

//----------------change_body--------------------

const body = document.querySelector("body");

body.style.backgroundColor = "#FF69B4";

console.log(body.style.backgroundColor);

//----------------generate_color------------------- 

const body = document.querySelector("body");
//three element basics color
const red = Math.floor(Math.random() * 256) //Decale from 1 but it's not rond
const blue = Math.floor(Math.random() * 256) //Decale from 1 but it's not rond
const green = Math.floor(Math.random() * 256) //Decale from 1 but it's not rond

body.style.backgroundColor = `rgb(${red},${blue},${green})`;

//------------See child of children---------------
const content = document.querySelector("main");

for (const child of content.children){
    console.log(child);
}
