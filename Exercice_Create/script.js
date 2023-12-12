const section = document.createElement('section');
let para;
const article = document.querySelector('article');
let apprenant = ["sacha", "regis", "chen", "josh"];

document.body.appendChild(section); 
article.appendChild(section);


for(let i = 0; i < apprenant.length; i++){
    para = document.createElement('p');
    section.appendChild(para);
    
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);

    let generateColor = `rgb(${red}, ${blue}, ${green})`;
    para.style.backgroundColor = generateColor;
    para.style.margin = "50px";
    para.textContent = apprenant[i];
    /* para.textContent = apprenant.join(',')*/ 
}