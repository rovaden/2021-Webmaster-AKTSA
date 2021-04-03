if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready(){
  for (var i =0; i<localStorage.length; i++){
    buildCart(i)
  }

  //hide no items display if there are items
  if(document.getElementsByClassName("item").length !== 0){
    let noItemsDiv = document.getElementById("no-items");
    noItemsDiv.style.display = "none";
    noItemsDiv.style.opacity = "1";
  }
  
  //adding event listeners to buttons and quantities
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
    addAlert("Success!", "We have received your order!");
  })
  .catch((error) => {
    addAlert("Oh no!", "Sorry, something went wrong :(");
    console.error('Error:', error);
  });
}

function quantityChanged(event) {
  var input = event.target
  var parentEl = input.parentElement.parentElement, title = parentEl.getElementsByClassName('cart-item-title')[0].innerText;
  var currentData = localStorage.getItem(title).split(",");
  currentData[currentData.length - 1] = input.value;
  localStorage.setItem(title, currentData.toString()); //updating it so that quantity changed is also stored locally
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
  var localStorageName = target.getElementsByClassName('cart-item-title')[0].innerText;
  return function(){
    window.setTimeout(function(){
      target.remove();
      //if there's nothing left, show the no items in cart div (with transition)
      if(document.getElementsByClassName("item").length === 0){
        let noItemsDiv = document.getElementById("no-items");
        noItemsDiv.style.display = "block";
        let curHeight = noItemsDiv.scrollHeight;
        noItemsDiv.style.height = "0";
        noItemsDiv.style.padding = "0em 1em";
        window.setTimeout(function(){
          noItemsDiv.style.opacity = "1";
          noItemsDiv.style.height = curHeight + "px";
          noItemsDiv.style.padding = "3em 1em";
          noItemsDiv.style.transition = "1s ease";
          noItemsDiv.addEventListener("transitionend", function(){
            noItemsDiv.style.height = "auto";
          });
        }, 10);
      }
    }, 500);
    target.style.animation = "removedItem 0.5s ease forwards";
    target.style.maxHeight = target.scrollHeight + "px";
    window.setTimeout(function(){
      target.style.maxHeight = "0";
      target.style.padding = "0";
    }, 1);
    localStorage.removeItem(localStorageName);
    updateCartTotal();
  }
}

function buildCart(index){
  var title = localStorage.key(index)
  var currentData = localStorage.getItem(title).split(",");
  if(currentData.length !== 4){ //checking if data is right
    return;
  }
  var price = currentData[1]
  var imageSrc = currentData[2]
  var quantity = currentData[3] || 1;
  if(price.split("$").length === 1){ //just another check if the data is right
    return;
  }
  var cartRow = document.createElement('div')
  cartRow.classList.add('item')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for (var i=0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title){
      alert('This item has already been added to the cart')
      return
    }
  }
  //changed to string bc IE apparently doesn't support template literals
  var cartRowContent = "<div class=\"buttons\">" +
    "<span class=\"delete-btn\"><i class=\"material-icons\">delete</i></span>" +
    "</div>" +
    "<div class = \"item-info-div\">" +
      "<div class=\"image\">" +
        "<img src=" + imageSrc + " alt=\"medicine\"/>" +
      "</div>" +
      "<div class=\"description\">" +
        "<span class = \"cart-item-title\">" + title + "</span>" +
        "<span>Dogsy Research and Production</span>" +
      "</div>" +
      "<div class=\"quantity\">" +
        "<input class=\"cart-quantity-input\" type=\"number\" value=\"" + quantity + "\" min = \"1\">" +
      "</div>" +
      "<div class=\"total-price\">" + price + "</div>" +
    "</div>";
  cartRow.innerHTML = cartRowContent;
  cartItems.append(cartRow);
}
