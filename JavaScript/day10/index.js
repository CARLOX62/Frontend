// let div = doucment.createElement('div');
// div.setAttribute('class', 'container');
// div.innerHTML = `hey yoy<b>i am aniket</b>`;
// document.body.appendChild(div);
// console.log(div);
let x = document.querySelector('.container');
x.insertAdjacentElement('afterbegin', document.querySelector('.box'));