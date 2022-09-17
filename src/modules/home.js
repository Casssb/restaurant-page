import { createHtmlElement, clearElement } from './helper';
import { renderMenu } from './menu';

const renderHome = () => {
  const main = document.querySelector('#page');
  const home = createHtmlElement('section', 'home', ['home'], null);

  home.innerHTML = `<h1 class="home-title">High Steaks</h1>
    <div class="home-description">
      <p>Vibe, vibrations</p>
      <p>Steaks is high, you know them steaks is high</p>
    </div>
    <button class="home-button-menu" id="menu-button">Menu</button>`;

  main.appendChild(home);

  const menuButton = document.querySelector('#menu-button');
  const homeNav = document.querySelector('#home');
  const menuNav = document.querySelector('#menu');
  menuButton.addEventListener('click', () => {
    clearElement(main);
    renderMenu();
    homeNav.classList.remove('nav-link-active');
    menuNav.classList.add('nav-link-active');
  });
};

export { renderHome };
