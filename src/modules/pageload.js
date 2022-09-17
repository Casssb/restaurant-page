import cow from '../img/cow-svg.svg';
import { createHtmlElement } from './helper';

const pageLoad = () => {
  const container = document.querySelector('#content');

  const renderHeader = () => {
    const header = createHtmlElement('header', null, ['header'], null);
    header.innerHTML = `<nav>
        <div class="nav-hamburger" id="hamburger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
       </div>
        <div class="nav-left">
          <img src="./b9cd1f60bfe9ed15fb8a.svg" alt="cow icon" />
          <h2><span>Mad Cow</span> Steak House</h2>
        </div>
        <div class="nav-right">
          <ul class="nav-links">
            <li id="home"><a href="#">Home</a></li>
            <li id="menu"><a href="#">Menu</a></li>
            <li id="about"><a href="#">About Us</a></li>
            <li id="contact"><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>`;
    container.appendChild(header);
  };

  renderHeader();
  /* Logic to toggle rightside menu when hamburger is clicked */
  const hamburger = document.querySelector('#hamburger');
  const navRight = document.querySelector('.nav-right');
  const navLinks = document.querySelectorAll('.nav-links li');
  hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    navRight.classList.toggle('active');
  });
  /* Logic to add bottom border and move menu item slightly upwards to indicate it's selected */
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      console.log(e.target);
      navRight.classList.toggle('active');
      navLinks.forEach((el) => el.classList.remove('nav-link-active'));
      link.classList.add('nav-link-active');
    });
  });

  const main = createHtmlElement('main', 'page', null, null);
  container.appendChild(main);
};

export { pageLoad };
