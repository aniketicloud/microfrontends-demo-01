import faker from 'faker';

const mount = (el) => {
  // replaced deprecated faker.random.number() with faker.dataType.number()
  const cartText = `<div>You have ${faker.datatype.number()} items in your cart</div>`;
  el.innerHTML = cartText;
};

// ! Suppose (In Reality actually), different teams are responsible for different project
// document.querySelector('#dev-products').innerHTML = products;
// ? here, Remote project cannot control over Host project to have same id.

/**
 * Situation #1
 * We're running this file in 'Development' in isolation (as standalone application)
 * We're using 'local' `index.html` file, which always will have an element
 * of id `dev-product`.
 * We want to immediately render our app into that element
 */
if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#cart-dev');
  if (element) {
    mount(element);
  }
}

/**
 * Situation #2
 * We're running this file (Remote) in 'Development' or 'Production' through Host
 * NO GURANTEE that an element with an id of `dev-products` exists
 * WE DO NOT WANT to try to immediately render the app
 */
export { mount };
