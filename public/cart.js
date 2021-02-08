if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}


function ready() {
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

  var addToCartButtons = document.getElementsByClassName('shop-item-button')
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClick)
  }

  updateCartTotal();
  logCart();
}

function removeCartItemFuncCreator(button){
  var button = button;
  var target = button.parentElement.parentElement;
  var target2 = target.parentElement;
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

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateCartTotal()
}

function addToCartClick(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src

  addItemToCart(title, price, imageSrc)

  updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('item')
  var cartItems = document.getElementsByClassName('shopping-cart')[0]
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
          <span>${title}</span>
          <span>Dogsy</span>
        </div>

        <div class="quantity">
          <input class="cart-quantity-input" type="number" value="1">
        </div>

        <div class="total-price">${price}</div>
      </div>`

  cartRow.innerHTML = cartRowContent
  cartItems.append(cartRow);
  var buttonClickfunc = removeCartItemFuncCreator(button);
  cartRow.getElementsByClassName('delete-btn')[0].addEventListener('click', buttonClickfunc)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
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

function logCart(){
  var button = document.getElementById('cart-check-out');
  button.addEventListener('click', function(e) {
  console.log('button was clicked');

  fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
  });

  setInterval(function() {
    fetch('/clicks', {method: 'GET'})
      .then(function(response) {
        if(response.ok) return response.json();
        throw new Error('Request failed.');
      })
      .then(function(data) {
        document.getElementById('counter').innerHTML = `Button was clicked ${data.length} times`;
      })
      .catch(function(error) {
        console.log(error);
      });
  }, 1000);
}
