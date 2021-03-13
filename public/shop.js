if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  //adding event listeners for click on shop buttons
  var allItems = document.getElementsByClassName("shop-item");
  for(let i = 0; i < allItems.length; i++){
    var itemButton = allItems[i].getElementsByTagName("button")[0];
    itemButton.dataset.index = i.toString();
    var clickFunc = createAddCartFunction(i);
    itemButton.addEventListener("click", clickFunc)
  }

  //shop search function
  var searchForm = document.getElementById("shop-search")
  searchBar = searchForm.getElementsByTagName("input")[0],
  searchButton = document.getElementById("search-submit");
  var searchNoResults = document.getElementById("search-no-results");
  var shopContainer = document.getElementById("shop-container");
  var searchPlaceholder = document.createElement("div");
  shopContainer.appendChild(searchPlaceholder);
  searchButton.addEventListener("click", function(){
    shopContainer.style.opacity = "0";
    searchNoResults.style.opacity = "0";
    window.setTimeout(function(){
      var searchWord = searchBar.value;
      var numberShowing = 0;

      //looping through items, showing if includes searchword, hiding if otherwise
      for(let i = 0; i < allItems.length; i++){
        if(allItems[i].textContent.toLowerCase().indexOf(searchWord) === -1){
          allItems[i].style.display = "none";
        }
        else {
          numberShowing++;
          allItems[i].style.display = "block";
        }
      }

      //no results div
      if(numberShowing === 0){
        searchNoResults.style.display = "block";
        window.setTimeout(function(){
          searchNoResults.style.opacity = "1";
        }, 10);
      }

      //handling shop-item being only one (not making it too large)
      else {
        searchNoResults.style.opacity = "0";
        searchNoResults.style.display = "none";
        if(numberShowing === 1 && shopContainer.scrollWidth >= 600){
          searchPlaceholder.style.display = "block";
        }
        else {
          searchPlaceholder.style.display = "none";
        }
        shopContainer.style.opacity = "1";
      }
    }, 250);
  })
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

function addItemToCart(title, price, imageSrc, quantity) {
  localStorage.setItem(title, [title, price, imageSrc, quantity])
  console.log(localStorage.getItem(title).split(',')[1])
}