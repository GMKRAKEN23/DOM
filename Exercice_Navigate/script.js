let ol = document.querySelector('ol');
let lastchildren = ol.lastElementChild;

ol.insertBefore(lastchildren, ol.firstElementChild);

let main = document.querySelector('main');

let section2 = document.querySelector('section:nth-child(2)');
let section3 = document.querySelector('section:nth-child(3)');

let h2Section2 = document.querySelector('section:nth-child(2) h2');
let h2Section3 = document.querySelector('section:nth-child(3) div h2');



let lastSection = document.querySelector('section:nth-child(3)');

lastSection.parentElement.removeChild(lastSection); 