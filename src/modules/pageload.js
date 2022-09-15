import cow from '../img/cow-svg.svg'
import { createHtmlElement } from './helper';

const pageLoad = () => {
  const container = document.querySelector('#content');

  const renderHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = `<nav>
        <div class="nav-left">
          <img src="./b9cd1f60bfe9ed15fb8a.svg" alt="cow icon" />
          <h2><span>Mad Cow</span> Steak House</h2>
        </div>
        <div class="nav-right">
          <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>`;
    container.appendChild(header);
  };

  renderHeader();

  const main = createHtmlElement('main', 'page', null, null)
  container.appendChild(main);
};

export { pageLoad };
