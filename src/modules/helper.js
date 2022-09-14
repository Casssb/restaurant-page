const createHtmlElement = (type, id, Classes, content) => {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (Classes) Classes.forEach((newClass) => element.classList.add(newClass));
  if (content) element.innerText = content;

  return element;
};

const createFormInput = (type, id, name, placeholder, required) => {
  const input = document.createElement('input');
  input.setAttribute('type', type);
  input.setAttribute('id', id);
  input.setAttribute('name', name);
  input.setAttribute('placeholder', placeholder);
  if (required) input.setAttribute('required', '');

  return input;
};

export { createHtmlElement, createFormInput };
