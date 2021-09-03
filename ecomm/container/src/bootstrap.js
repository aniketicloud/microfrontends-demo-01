import { mount as productMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

console.log('Container/Host .. !');

// products
const elmentProduct = document.querySelector('#my-products');
productMount(elmentProduct);

// cart
const elementCart = document.querySelector('#my-cart');
cartMount(elementCart);
