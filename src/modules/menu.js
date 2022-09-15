import { createHtmlElement } from './helper';

const renderMenu = () => {
    const main = document.querySelector('#page');
    const menu = createHtmlElement('section', 'menu', ['menu'], null);
    menu.innerHTML = `<h1> Balls</h1>`
    main.appendChild(menu)
}

export {renderMenu};