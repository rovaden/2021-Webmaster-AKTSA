if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  localStorage.clear()
  console.log()
  var addToCartButtons = document.getElementsByClassName('shop-item-button')
  // for (var i = 0; i < addToCartButtons.length; i++) {
  //   addToCartButtons[i].addEventListener('click', addToCartClick(addToCartButtons[i]))
  //   console.log(addToCartButtons[i])
  // }
}

function addToCartClick(index) {
  console.log("clicked!")
  var title = document.getElementsByClassName('shop-item-title')[index].innerText
  var price = document.getElementsByClassName('shop-item-price')[index].innerText
  var imageSrc = document.getElementsByClassName('shop-item-image')[index].src

  addItemToCart(title, price, imageSrc)
}

function addItemToCart(title, price, imageSrc) {
  localStorage.setItem(title, [title, price, imageSrc])
  console.log(localStorage.getItem(title).split(',')[1])
}