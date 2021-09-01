import faker from 'faker';

// replaced deprecated faker.random.number() with faker.dataType.number()
const cartText = `<div>You have ${faker.datatype.number()} items in your cart</div>`;

document.querySelector('#cart-dev').innerHTML = cartText;
