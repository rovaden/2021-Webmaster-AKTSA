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

function addAlert(headerMessage, message){
  var alertEl = document.getElementsByClassName("alerts")[0];
  var newAlert = document.createElement("div");
  newAlert.className = "shop-alert";
  newAlert.innerHTML = "<h3>" + headerMessage + "</h3><p>" + message + "</p>";
  alertEl.appendChild(newAlert);
  window.setTimeout(function(){
    newAlert.remove();
  }, 3000);
}

function createAddCartFunction(index){
  var quantity = 0;
  var index = index;
  return function(){
    quantity++;
    console.log("clicked!")
    var title = document.getElementsByClassName('shop-item-title')[index].innerText
    var price = document.getElementsByClassName('shop-item-price')[index].innerText
    var imageSrc = document.getElementsByClassName('shop-item-image')[index].src;

    //alert
    if(localStorage.getItem(title) === null){
      addAlert("Success!", title + " has been added to your cart!");
    }
    else {
      addAlert("Success!", "You have added more " + title + " to your cart!");
    }

    //add item to cart
    addItemToCart(title, price, imageSrc, quantity);
  }
}
function addToCartClick(index) {
  console.log("clicked!")
  var title = document.getElementsByClassName('shop-item-title')[index].innerText
  var price = document.getElementsByClassName('shop-item-price')[index].innerText
  var imageSrc = document.getElementsByClassName('shop-item-image')[index].src

  if(localStorage.getItem(title) === null){
    addItemToCart(title, price, imageSrc)
    addAlert("Success!", title + " has been added to your cart!");
  }
  else {
    addAlert("Success!", "You have added more " + title + " to your cart!");
  }
}

function addItemToCart(title, price, imageSrc, quantity) {
  localStorage.setItem(title, [title, price, imageSrc, quantity])
  console.log(localStorage.getItem(title).split(',')[1])
}

/*adding event listeners for click on shop buttons*/
var allItems = document.getElementsByClassName("shop-item");
for(let i = 0; i < allItems.length; i++){
  var itemButton = allItems[i].getElementsByTagName("button")[0];
  itemButton.dataset.index = i.toString();
  var clickFunc = createAddCartFunction(i);
  itemButton.addEventListener("click", clickFunc)
}