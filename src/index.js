import faker from 'faker';
const myCart = `<div>You have ${faker.random.number()} items in you cart</div>`;

document.querySelector('#dev-cart').innerHTML = myCart;