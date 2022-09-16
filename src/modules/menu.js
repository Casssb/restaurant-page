import { createHtmlElement } from './helper';

const renderMenu = () => {
  const main = document.querySelector('#page');
  const menu = createHtmlElement('section', 'menu', ['menu'], null);

  const foodMenuCatagory = createHtmlElement(
    'div',
    'food',
    ['menu-catagory'],
    null
  );
  menu.appendChild(foodMenuCatagory);

  const foodMenuTitle = createHtmlElement(
    'h2',
    null,
    ['menu-catagory-title'],
    'Steaks'
  );
  foodMenuCatagory.appendChild(foodMenuTitle);

  const foods = [
    { name: 'Fillet', size: '350g', cost: '37.95' },
    { name: 'Rump', size: '350g', cost: '24.95' },
    { name: 'Rib Eye', size: '350g', cost: '31.95' },
    { name: 'Sirloin', size: '350g', cost: '29.95' },
  ];

  foods.forEach((food) => {
    const foodItem = createHtmlElement('div', null, ['menu-item'], null);
    const foodName = createHtmlElement(
      'h3',
      null,
      ['menu-item-title'],
      `${food.name}`
    );
    foodItem.appendChild(foodName);
    const foodSize = createHtmlElement(
      'p',
      null,
      ['menu-description'],
      `${food.size}`
    );
    foodItem.appendChild(foodSize);
    const foodCost = createHtmlElement(
      'p',
      null,
      ['menu-description'],
      `${food.cost}`
    );
    foodItem.appendChild(foodCost);

    foodMenuCatagory.appendChild(foodItem);
  });

  const drinkMenuCatagory = createHtmlElement(
    'div',
    'drink',
    ['menu-catagory'],
    null
  );
  menu.appendChild(drinkMenuCatagory);

  const drinkMenuTitle = createHtmlElement(
    'h2',
    null,
    ['menu-catagory-title'],
    'Drinks'
  );
  drinkMenuCatagory.appendChild(drinkMenuTitle);

  const drinks = [
    { name: 'Irn-Bru', size: '330ml', cost: '2.50' },
    { name: 'Beer', size: '330ml', cost: '5.50' },
    { name: 'Cider', size: '330ml', cost: '5' },
    { name: 'Vodka', size: '25ml', cost: '4.50' },
  ];

  drinks.forEach((drink) => {
    const drinkItem = createHtmlElement('div', null, ['menu-item'], null);
    const drinkName = createHtmlElement(
      'h3',
      null,
      ['menu-item-title'],
      `${drink.name}`
    );
    drinkItem.appendChild(drinkName);
    const drinkSize = createHtmlElement(
      'p',
      null,
      ['menu-description'],
      `${drink.size}`
    );
    drinkItem.appendChild(drinkSize);
    const drinkCost = createHtmlElement(
      'p',
      null,
      ['menu-description'],
      `${drink.cost}`
    );
    drinkItem.appendChild(drinkCost);

    drinkMenuCatagory.appendChild(drinkItem);
  });

  main.appendChild(menu);
};

export { renderMenu };
