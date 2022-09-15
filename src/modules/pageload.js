import cow from '../img/cow-svg.svg'

const pageLoad = () => {
  const container = document.querySelector('#content');

  const renderHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = `<nav>
        <div class="nav-left">
          <img src="`${cow}`" alt="cow icon" />
          <h2><span>Angry Cow</span> Steak House</h2>
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

  const main = document.createElement('main');
  main.setAttribute('id', 'page');
  container.appendChild(main);
};

export { pageLoad };
