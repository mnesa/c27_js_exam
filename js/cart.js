
// // My Cart
function updateProductInput(productId, price, isIncrease) {
  const productInput = document.getElementById(productId + '-number');
  let productNumber = productInput.value;
  if (isIncrease) {
    productInput.value = parseInt(productNumber) + 1;
  }
  else if (productNumber > 0) {
    productInput.value = parseInt(productNumber) - 1;
  }


  productNumber = productInput.value
  const totalProductPrice = document.getElementById(productId + '-total');
  totalProductPrice.innerText = productNumber * price;

  calculateTotal()
}

function updateProductQuantity(id) {
  const productInput = document.getElementById(id+'-number');
  const productNumber = parseInt(productInput.value);
  return productNumber;
}
  
function calculateTotal() {
  const watchAmmount = updateProductQuantity('watch') * 120;
  const dressAmmount = updateProductQuantity('dress') * 80;
  const cupAmmount = updateProductQuantity('cup') * 40;
  const capAmmount = updateProductQuantity('cup') * 30;
  const bagAmmount = updateProductQuantity('cup') * 50;
  

  const subTotal = watchAmmount + dressAmmount + cupAmmount + capAmmount + bagAmmount;
  const tax = Math.floor((subTotal * 15)/100);
  const grandTotal = subTotal + tax;

  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax').innerText = tax;
  document.getElementById('grand-total').innerText = grandTotal;
  }

//watch
document.getElementById('watch-plus').addEventListener('click', function () { updateProductInput('watch', 120, true)
})
document.getElementById('watch-minus').addEventListener('click', function () { updateProductInput('watch', 120, false)
})

//dress
document.getElementById('dress-plus').addEventListener('click', function () { updateProductInput('dress', 80, true)
})
document.getElementById('dress-minus').addEventListener('click', function () { updateProductInput('dress', 80, false)
})

//cup
document.getElementById('cup-plus').addEventListener('click', function () { updateProductInput('cup', 40, true)
})
document.getElementById('cup-minus').addEventListener('click', function () { updateProductInput('cup', 40, false)
})


//cap
document.getElementById('cap-plus').addEventListener('click', function () { updateProductInput('cap', 30, true)
})
document.getElementById('cap-minus').addEventListener('click', function () { updateProductInput('cap', 30, false)
})

//bag
document.getElementById('bag-plus').addEventListener('click', function () { updateProductInput('bag', 50, true)
})
document.getElementById('bag-minus').addEventListener('click', function () { updateProductInput('bag', 50, false)
})



// //login Page
document.getElementById('login-button').addEventListener('click', function () {
  const userEmailField = document.getElementById('user-email');
  const userEmail = userEmailField.value;
  const userPasswordField = document.getElementById('password');
  const userPassword = userPasswordField.value;
  // const userConfirmPwField = document.getElementById('confirm-pw');
  // const userconfirmPw = userConfirmPwField.value;


  if (userEmail == 'admin@admin.com' && userPassword == 123456) {
    window.location.href="index.html"
  }
})