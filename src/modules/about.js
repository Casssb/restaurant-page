import { createHtmlElement } from './helper';

const renderAbout = () => {
    const main = document.querySelector('#page');
    const about = createHtmlElement('section', 'about', ['about'], null);
    about.innerHTML = `<h1> All about Balls</h1>`
    main.appendChild(about)
}

export {renderAbout};