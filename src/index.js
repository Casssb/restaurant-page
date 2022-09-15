import 'sanitize.css';
import './css/style.css';
import { clearElement } from './modules/helper';
import { pageLoad } from './modules/pageload';
import { renderHome} from './modules/home';
import { renderMenu} from './modules/menu';
import { renderAbout} from './modules/about';
import { renderContact} from './modules/contact';

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
    console.log(e.target)
});

menu.addEventListener('click', (e) => {
    clearElement(main);
    renderMenu();
    console.log(e.target)
});

about.addEventListener('click', (e) => {
    clearElement(main);
    renderAbout();
    e.preventDefault();
    console.log(e.target)
});

contact.addEventListener('click', (e) => {
    clearElement(main);
    renderContact();
    e.preventDefault();
    console.log(e.target)
});
