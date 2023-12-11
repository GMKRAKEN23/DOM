const classImportant = document.querySelectorAll(".important");
classImportant.setAttribute("title", "This is an important item");

/* bad_pratique
for(let i = 0; i <= 2 && i < classImportant.length; i++){
    classImportant[i].setAttribute("title", "This is an important item");
}
*/