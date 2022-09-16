import 'sanitize.css';
import './css/style.css';
import { clearElement } from './modules/helper';
import { pageLoad } from './modules/pageload';
import { renderHome } from './modules/home';
import { renderMenu } from './modules/menu';
import { renderAbout } from './modules/about';
import { renderContact } from './modules/contact';

pageLoad();
renderHome();

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const main = document.querySelector('#page');

home.addEventListener('click', (e) => {
  clearElement(main);
  renderHome();
});

menu.addEventListener('click', (e) => {
  clearElement(main);
  renderMenu();
});

about.addEventListener('click', (e) => {
  clearElement(main);
  renderAbout();
});

contact.addEventListener('click', (e) => {
  clearElement(main);
  renderContact();
});
