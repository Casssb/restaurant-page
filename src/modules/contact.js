import { createHtmlElement } from './helper';

const renderContact = () => {
    const main = document.querySelector('#page');
    const contact = createHtmlElement('section', 'contact', ['contact'], null);
    contact.innerHTML = `<h1> Balls contact big balls</h1>`
    main.appendChild(contact)
}

export {renderContact};