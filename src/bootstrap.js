import faker from 'faker';

const mountCart = (el) => {
  const myCart = `<div>You have ${faker.random.number()} items in you cart</div>`;
  el.innerHTML = myCart;
}


if(process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');
  if(el){
    mountCart(el);
  }
}


export { mountCart };