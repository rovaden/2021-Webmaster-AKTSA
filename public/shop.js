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
  var searchForm = document.getElementById("shop-search");
  if(searchForm === null){
    return;
  }
  var searchBar = searchForm.getElementsByTagName("input")[0],
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
  var xOut = document.createElement("i");
  xOut.className = "material-icons";
  xOut.textContent = "close";
  newAlert.appendChild(xOut);
  alertEl.appendChild(newAlert);

  //adding animation
  window.setTimeout(function(){
    newAlert.style.opacity = "1";
    newAlert.addEventListener("transitionend", function(){
      window.setTimeout(function(){
        newAlert.style.opacity = "0";
        window.setTimeout(function(){
          newAlert.remove();
        }, 500);
      }, 4000);
    });
  }, 1);
  
  //closing on click
  xOut.addEventListener("click", function(){
    newAlert.style.opacity = "0";
    window.setTimeout(function(){
      newAlert.remove();
    }, 500);
  });
}

function createAddCartFunction(index){
  var index = index;
  return function(){
    console.log("clicked!")
    var title = document.getElementsByClassName('shop-item-title')[index].innerText
    var price = document.getElementsByClassName('shop-item-price')[index].innerText
    var imageSrc = document.getElementsByClassName('shop-item-image')[index].src;

    //alert
    if(localStorage.getItem(title) === null){
      addAlert("Success!", title + " has been added to your cart!");
      addItemToCart(title, price, imageSrc, 1);
    }
    else {
      let quantity = parseFloat(localStorage.getItem(title).split(",")[3]);
      quantity++;
      addAlert("Success!", "You have added more " + title + " to your cart!");
      addItemToCart(title, price, imageSrc, quantity);
    }
  }
}

function addItemToCart(title, price, imageSrc, quantity) {
  localStorage.setItem(title, [title, price, imageSrc, quantity]);
}