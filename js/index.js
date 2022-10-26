// ITERATION 1

// let grandTotal = document.querySelector('#total-value span').innerText;
// console.log(grandTotal);

function updateSubtotal(product) {
  let sum = 0;
  let arr = [];
  let grandTotal = document.querySelector('#total-value span');
  for (let i = 0; i < product.length; i++) {
    let price = product[i].querySelector('.price span').innerHTML;
    let quantity = product[i].querySelector('.quantity input').value;
    product[i].querySelector('.subtotal span').innerHTML = price * quantity;
    let subTotal = Number(product[i].querySelector('.subtotal span').innerHTML);
    grandTotal.innerHTML += subTotal;
    arr.push(subTotal);
  }
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }
  grandTotal.innerHTML = sum;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let products = document.getElementsByClassName('product');
  updateSubtotal(products);

  // ITERATION 3
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
