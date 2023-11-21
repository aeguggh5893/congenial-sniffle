export function homepage() {

const content = document.querySelector('#content');
content.replaceChildren();

const picture = document.createElement('img');
picture.src = "https://i.pinimg.com/736x/f4/08/62/f408629707e7266b984fbcac31255c93.jpg";
picture.alt = "cupacake";

content.appendChild(picture);

const h1 = document.createElement('h1');
h1.textContent = 'This is a cute picture of a cupcake!';

content.appendChild(h1);

}

