/* const classImportant = document.querySelectorAll(".important");
classImportant.setAttribute("title", "This is an important item");

/* bad_pratique
for(let i = 0; i <= 2 && i < classImportant.length; i++){
    classImportant[i].setAttribute("title", "This is an important item");
}


const image = document.querySelectorAll('img');

image.forEach(img => {
    if(!img.classList.contains('important')){
        img.style.display = "none";
    }
});



const para = document.querySelectorAll('p');

para.forEach((paragraph) => {
    console.log(paragraph.innerText);
    console.log(paragraph.classList);
});
*/

const para = document.querySelectorAll('p');
console.log(para);
function addRandomColor(paragraph){
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    console.log(paragraph.classList.contains('important'))
    if (paragraph.classList.length > 0){
        paragraph.style.color = `rgb(${red}, ${blue}, ${green})`;
    }
}

para.forEach(addRandomColor);