if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
  } else {
    ready()
  }

function ready(){
    var checkoutButton = document.getElementById(cart-check-out)
    checkoutButton.addEventListener('click', logCart)
}

function logCart(){
    document.getElementsByClassName("item")
}