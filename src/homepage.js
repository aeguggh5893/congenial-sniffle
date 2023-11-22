export function homepage() {

const content = document.querySelector('#content');
content.replaceChildren();

const div = document.createElement('div');
div.classList.add('container');
content.appendChild(div);

const picture = document.createElement('img');
picture.src = "../src/assets/Choso-banner.webp";
picture.alt = "Choso Banner";

div.appendChild(picture);

const h1 = document.createElement('h1');
h1.classList.add('bannerDesc');
h1.textContent = 'This is my favorite character, Choso. He is from the anime series, Jujutsu Kaisen.';
div.appendChild(h1);

const description = document.createElement('p');
description.classList.add('bannerDesc');
description.textContent = 'Choso is an incarnated cursed womb: Death Paintings Number 1 - 3. He initially sided with Kenjaku and the disaster curses. However, after finding out about the identity of the Death Paintings father, Noritoshi Kamo, Choso decided to switch alliances and side with Yuji.'

div.appendChild(description);

const stats = document.createElement('p');
stats.classList.add('bannerDesc');
stats.innerHTML = '<p> Species: Death Painting Wombs <br> Age: 150+ <br> Gender: Male <br> Height: 181cm (5-11) <br> Hair Color: Black <br> Eye Color: Purple</p>';
div.appendChild(stats);
}

