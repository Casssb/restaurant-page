const createHtmlElement = (type, id, Classes, content) => {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (Classes) Classes.forEach((newClass) => element.classList.add(newClass));
  if (content) element.innerText = content;

  return element;
};

const createFormInput = (type, id, name, placeholder, required) => {
  const input = document.createElement('input');
  if (type) input.setAttribute('type', type);
  if( id) input.setAttribute('id', id);
  if (name) input.setAttribute('name', name);
  if (placeholder) input.setAttribute('placeholder', placeholder);
  if (required) input.setAttribute('required', '');

  return input;
};

export { createHtmlElement, createFormInput };
