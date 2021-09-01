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

/**
 * We're running this file (Remote) in 'Development' or 'Production' through Host
 * NO GURANTEE that an element with an id of `dev-products` exists
 * WE DO NOT WANT to try to immediately render the app
 */
