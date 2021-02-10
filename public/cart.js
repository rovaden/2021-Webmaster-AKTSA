if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready(){
  for (var i =0; i<localStorage.length; i++){
    buildCart(i)
  }
  // var button = document.getElementById('cart-check-out')
  // button.addEventListener('click', logCart())  
  var removeItemButtons = document.getElementsByClassName('delete-btn')
  for (var i = 0; i < removeItemButtons.length; i++) {
    var button = removeItemButtons[i];
    var buttonClickfunc = removeCartItemFuncCreator(button);
    button.addEventListener('click', buttonClickfunc);
  }
  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
  }
  localStorage.clear();
  updateCartTotal();
}

function logCart(){
  console.log('button was clicked');
  var data = {};
  var cartItemContainer = document.getElementsByClassName('shopping-cart')[0];
  var cartItems = cartItemContainer.getElementsByClassName('item');
  console.log(document.getElementsByClassName('cart-total-price')[0].innerHTML);
  for (var i=0; i < cartItems.length; i++){
    data["item " + (i+1)] = {
      itemName: document.getElementsByClassName('cart-item-title')[i].innerText, 
      itemQuantity: document.getElementsByClassName('cart-quantity-input')[i].value,
      itemTotalPrice: document.getElementsByClassName('total-price')[i].innerText
    };
  }
  data["totalCartPrice"] = document.getElementsByClassName('cart-total-price')[0].innerHTML;
  fetch('/cart', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    alert("Success! We have received your cart! \nUnfortunately KatKure isn't a real company so your request was useless. \n(  ◞‸◟)")
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateCartTotal()
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('shopping-cart')[0]
  var cartRows = cartItemContainer.getElementsByClassName('item')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('total-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]

    var price = parseFloat(priceElement.innerText.replace('$', ''))
    var quantity = quantityElement.value

    total += (price*quantity)
  }

  total = Math.round(total*100)/100
  document.getElementsByClassName('cart-total-price')[0].innerText = "$" + total
}

function removeCartItemFuncCreator(button){
  var target = button.parentElement.parentElement;
  target.style.maxHeight = target.parentElement.getBoundingClientRect().height + "px";
  return function(){
    window.setTimeout(function(){
      target.remove();
    }, 500);
    target.style.animation = "removedItem 0.5s ease forwards";
    target.style.maxHeight = "0";
    target.style.padding = "0";
    updateCartTotal();
  }
}

function buildCart(index){
  var title = localStorage.key(index)
  var price = localStorage.getItem(title).split(',')[1]
  var imageSrc = localStorage.getItem(title).split(',')[2]
  var cartRow = document.createElement('div')
  console.log(localStorage.key(index))
  cartRow.classList.add('item')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for (var i=0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title){
      alert('This item has already been added to the cart')
      return
    }
  }
  var cartRowContent = `
      <div class="buttons">
        <span class="delete-btn"><i class="material-icons">delete</i></span>
      </div>
      <div class = "item-info-div">
        <div class="image">
          <img src="${imageSrc}" alt="herbal" width="100"/>
        </div>
        <div class="description">
          <span class = "cart-item-title">${title}</span>
          <span>Dogsy</span>
        </div>
        <div class="quantity">
          <input class="cart-quantity-input" type="number" value="1">
        </div>
        <div class="total-price">${price}</div>
      </div>`
  cartRow.innerHTML = cartRowContent
  cartItems.append(cartRow);
  cartRow.getElementsByClassName('delete-btn')[0].addEventListener('click', removeCartItemFuncCreator(document.getElementsByClassName("delete-btn")[index]))
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}