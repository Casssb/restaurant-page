import { createHtmlElement } from './helper';

const renderAbout = () => {
  const main = document.querySelector('#page');
  const about = createHtmlElement('section', 'about', ['about'], null);
  about.innerHTML = `<h2 class="about-title">Steaks is high (higher than high)</h2>
    <p class="about-description">The Instamatic focal point bringin' damage to your farm<br>
      Be some bulls from the east with some steaks that be warm <br>
      Got the solar gravitation so I'm bound to pull it <br>
      I gets down like brothers are found duckin' from bullets (moo) <br>
      Meat control means usin' both hooves in my land (moo) <br>
      Where it's all about the cautious livin' (moo mooo) <br>
      Migrating to a higher form of consequence, compliments <br>
      Of strugglin', that shouldn't be notable <br>
      Man, every word I say should be a hip hop quotable</p>`;
  main.appendChild(about);
};

export { renderAbout };
