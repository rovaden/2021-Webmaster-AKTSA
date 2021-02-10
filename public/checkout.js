if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
  } else {
    ready()
  }

  function ready(){
    var button = document.getElementById('cart-check-out')
    button.addEventListener('click', logCart())  
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
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  