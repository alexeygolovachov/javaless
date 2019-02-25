// var FULL_BABELS = [];
// const ROOT = document.querySelector(`div#root`);

// function createBall(idContainer, array) {
//   let item = document.createElement(`div`);
//   item.className = "babel";
//   item.style.top = Math.random() * 500 + `px`;
//   item.style.left = Math.random() * 500 + `px`;

//   document.querySelector(`#${idContainer}`).appendChild(item);

//   array.push(item);
// }

// setInterval(() => {
//   createBall("root", FULL_BABELS);
// }, 100);

// setInterval(() => {
//     let lastindex = (FULL_BABELS.length-1) * Math.random();
//     for (let i=0; i<lastindex; i++  ) {
//         let el = FULL_BABELS.shift();
//         let p = el.parentElement;
//         p.removeChild(el);
//     }
// }, 500);

function ch() {
  return Math.round(Math.random() * 100);
}

function table() {
  // let lin = document.createElement(`li`);
  let html = "<ul>";
  for (let i = 0; i < 10; i++) {
    html += ` <li> ${ch()}</li>`;
  }

  html += "</ul>";
  root.innerHTML = html;
}
table();

setInterval(() => {
  let i = document.querySelector(`input`);
  let items = document.querySelectorAll(`li`);

  items = Array.prototype.filter.call(items, e => {
    console.log(+e.innerHTML);
    return +e.innerHTML < +i.value;
  });

  console.log(items);
}, 1000);
