// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  product.querySelector('.subtotal span').innerHTML = price * quantity;
  let subTotal = Number(product.querySelector('.subtotal span').innerHTML);
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  // ITERATION 3

  let total = 0;
  let products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }
  let grandTotal = document.querySelector('#total-value span');
  grandTotal.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let table = target.parentNode.parentNode.parentNode;
  let row = target.parentNode.parentNode;
  table.removeChild(row);
  calculateAll();
}

// ITERATION 5

function createProduct(e) {
  let productElement = document.querySelector('.product');
  let createNewProduct = productElement.cloneNode(true);
  let newProductName = document.querySelector(
    '.create-product input[type="text"]'
  ).value;
  let newProductPrice = document.querySelector(
    '.create-product input[type="number"]'
  ).value;

  createNewProduct.querySelector('.name span').textContent = newProductName;
  createNewProduct.querySelector('.price span').textContent = newProductPrice;
  document.querySelector('tbody').appendChild(createNewProduct);
  createNewProduct
    .querySelector('.btn-remove')
    .addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const createProductButton = document.getElementById('create');
  createProductButton.addEventListener('click', createProduct);
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  let removeButtons = document.getElementsByClassName('btn btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
});
