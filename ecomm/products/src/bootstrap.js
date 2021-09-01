import faker from 'faker';

// el will be html element
// and inside funtion we will do what we want to do with that element
const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
  // instead of this el.innerHTML we can do like other frameworks (like React, Vue, etc.)
  // ReactDOM.render(<App />, el)
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
if (process.env.NODE_ENV == 'development') {
  // this element id should be unique so that not to conflict with Host elements
  // e.g. #dev-products-dev-only
  // and of course this id should match with Remote index.html
  const el = document.querySelector('#dev-products');

  // assuming our Host(container) doesn't have an element with `dev-products`
  if (el) {
    // we're probably running in isolation
    mount(el);
  }
}

/**
 * We're running this file (Remote) in 'Development' or 'Production' through Host
 * NO GURANTEE that an element with an id of `dev-products` exists
 * WE DO NOT WANT to try to immediately render the app
 */
