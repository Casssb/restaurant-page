const createHtmlElement = (type, id, newClass, content) => {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (newClass) newClass.forEach((newClass) => element.classList.add(newClass));
  if (content) element.innerText = content;

  return element;
};

const createFormLabel = (target, id, newClass, content) => {
  const label = document.createElement('label');
  label.setAttribute('for', target);
  if (id) label.id = id;
  if (newClass) newClass.forEach((newClass) => label.classList.add(newClass));
  if (content) label.innerText = content;

  return label;
};

const createFormInput = (type, id, newClass, name, placeholder, required) => {
  const input = document.createElement('input');
  if (type) input.setAttribute('type', type);
  if (id) input.setAttribute('id', id);
  if (newClass) newClass.forEach((newClass) => input.classList.add(newClass));
  if (name) input.setAttribute('name', name);
  if (placeholder) input.setAttribute('placeholder', placeholder);
  if (required) input.setAttribute('required', '');

  return input;
};

const createFormTextarea = (
  type,
  id,
  newClass,
  name,
  placeholder,
  maxlength,
  required
) => {
  const textInput = document.createElement('textarea');
  if (type) textInput.setAttribute('type', type);
  if (id) textInput.setAttribute('id', id);
  if (newClass)
    newClass.forEach((newClass) => textInput.classList.add(newClass));
  if (name) textInput.setAttribute('name', name);
  if (placeholder) textInput.setAttribute('placeholder', placeholder);
  if (maxlength) textInput.setAttribute('maxlength', maxlength);
  if (required) textInput.setAttribute('required', '');

  return textInput;
};

const clearElement = (elem) => {
  elem.innerHTML = '';
  return elem;
};

export {
  createHtmlElement,
  createFormLabel,
  createFormInput,
  createFormTextarea,
  clearElement,
};
