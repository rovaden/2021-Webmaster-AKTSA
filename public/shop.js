if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  console.log()
  var addToCartButtons = document.getElementsByClassName('shop-item-button')
  // for (var i = 0; i < addToCartButtons.length; i++) {
  //   addToCartButtons[i].addEventListener('click', addToCartClick(addToCartButtons[i]))
  //   console.log(addToCartButtons[i])
  // }
}

function addAlert(message){
  var alertEl = document.getElementsByClassName("alerts")[0];
  var newAlert = document.createElement("div");
  newAlert.className = "shop-alert";
  newAlert.innerHTML = "<h3>Success!</h3><p>" + message + "</p>";
  alertEl.appendChild(newAlert);
  window.setTimeout(function(){
    newAlert.remove();
  }, 3000);
}

function addToCartClick(index) {
  console.log("clicked!")
  var title = document.getElementsByClassName('shop-item-title')[index].innerText
  var price = document.getElementsByClassName('shop-item-price')[index].innerText
  var imageSrc = document.getElementsByClassName('shop-item-image')[index].src

  addItemToCart(title, price, imageSrc)
  addAlert(title + " has been added to your cart!");
}

function addItemToCart(title, price, imageSrc) {
  localStorage.setItem(title, [title, price, imageSrc])
  console.log(localStorage.getItem(title).split(',')[1])
}

/*adding event listeners for click on shop buttons*/
var allItems = document.getElementsByClassName("shop-item");
for(let i = 0; i < allItems.length; i++){
  var itemButton = allItems[i].getElementsByTagName("button")[0];
  itemButton.dataset.index = i.toString();
  itemButton.addEventListener("click", function(){
    addToCartClick(i);
  })
}