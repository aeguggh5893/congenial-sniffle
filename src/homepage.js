const picture = document.createElement('img');
picture.setAttribute("src", "https://i.pinimg.com/736x/f4/08/62/f408629707e7266b984fbcac31255c93.jpg");
picture.setAttribute("alt", "cupacake");

const h1 = document.createElement('h1');
h1.textContent = 'This is a cute picture of a cupcake!';

export {picture, h1};