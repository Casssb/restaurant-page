import {
  createHtmlElement,
  createFormLabel,
  createFormInput,
  createFormTextarea,
} from './helper';

const renderContact = () => {
  const main = document.querySelector('#page');
  const contact = createHtmlElement('section', 'contact', ['contact'], null);

  const contactTitle = createHtmlElement(
    'h2',
    null,
    ['contact-title'],
    'Contact Us'
  );
  contact.appendChild(contactTitle);

  const contactContainer = createHtmlElement(
    'div',
    null,
    ['contact-container'],
    null
  );
  contact.appendChild(contactContainer);

  const addressContainer = createHtmlElement(
    'div',
    null,
    ['address-container'],
    null
  );
  contactContainer.append(addressContainer);

  const addressDetails = createHtmlElement('div', null, ['address-details'], null);
  addressContainer.append(addressDetails);
  addressDetails.innerHTML = `<h3 class="address-title">Address</h3>
  <p class="address-description">
    Unit 4 Cargo <br> 
    Gaol Ferry Steps <br>
    Bristol <br>
    BS1 6WE <br>
    0808 134 5800 <br>
    ifyoureinbristol@<br>grabasqueezedtheyrelush.com</p>
  <h3 class="address-title">Hours</h3>
  <p class="address-description">Tues-Sat: 12pm-3pm/5pm-9pm <br>
  Sun & Mon: Closed</p>`

  const googleMap = createHtmlElement('div', null, ['address-map'], null);
  addressContainer.append(googleMap);
  googleMap.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.608668865498!2d-2.6013833842006386!3d51.44698027962526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718d87123b44c3%3A0x6e0c6ef70ce4f196!2sSqueezed!5e0!3m2!1sen!2suk!4v1663340016138!5m2!1sen!2suk" width="300" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  /* Create and append contact form to DOM */

  const contactForm = createHtmlElement('form', null, ['contact-form'], null);
  contactContainer.appendChild(contactForm);

  const formFieldset = createHtmlElement(
    'fieldset',
    null,
    ['form-fieldset'],
    null
  );
  contactForm.appendChild(formFieldset);
  const contactFormButton = createHtmlElement(
    'button',
    'form-button',
    ['contact-form-button'],
    'Submit'
  );
  contactForm.append(contactFormButton);

  const formTitle = createHtmlElement(
    'legend',
    null,
    ['form-title'],
    'Send us a Message'
  );
  formFieldset.appendChild(formTitle);

  const nameLabel = createFormLabel('name', null, ['form-label'], 'Name');
  const nameInput = createFormInput(
    'text',
    'name',
    ['form-input'],
    'name',
    null,
    true
  );
  formFieldset.append(nameLabel, nameInput);

  const emailLabel = createFormLabel('email', null, ['form-label'], 'Email');
  const emailInput = createFormInput(
    'email',
    'email',
    ['form-input'],
    'email',
    null,
    true
  );
  formFieldset.append(emailLabel, emailInput);

  const messageLabel = createFormLabel(
    'message',
    null,
    ['form-label'],
    'Message'
  );
  const messageInput = createFormTextarea(
    'textarea',
    'message',
    ['form-input'],
    'message',
    null,
    '300',
    true
  );
  formFieldset.append(messageLabel, messageInput);

  main.appendChild(contact);
};

export { renderContact };
