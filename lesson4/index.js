const ROOT = document.querySelector(`div#root`);
console.log(ROOT);
var T =document.querySelector(".time");

setInterval( function()  {
    var t = new Date().toLocaleTimeString();
    T.innerHTML = t;
}, 1000);

function createAlert( container,text,lvl) {
let el = document.createElement(`div`);
el.innerText = text;
container.appendChild(el); //zapis texta v child div

el.style.position=`absolute;`;

el.style.top= `100px;`;


el.style.left= `100px;`;

setTimeout (()=> {
   container.removeChild(el);
},5000);
    // let el = `<div data-lvl="${lvl}">${text}</div>`;

    // container.innerHTML+=el;
}


setTimeout(() => {
createAlert(ROOT, "text", 1)
}, 5000);


