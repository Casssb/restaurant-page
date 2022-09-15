import { createHtmlElement } from './helper';

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
};

export { renderHome };
