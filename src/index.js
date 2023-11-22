import {homepage} from './homepage.js';
import {contacts} from './contact.js';
import {moveset} from './moveset.js';
import './style.css';





homepage();

const homeButton = document.querySelector('.home');
homeButton.addEventListener('click', homepage);

const contactButton = document.querySelector('.contacts');
contactButton.addEventListener('click', contacts);

const moveSetButton = document.querySelector('.moveset');
moveSetButton.addEventListener('click', moveset);