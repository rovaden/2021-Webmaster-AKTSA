//MODAL
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("settings-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Checkbox
function saveInfo() {
  for (i=1; i<=8; i++){
    String tempVar = (("checkbox").concat(i));
    var tempVar = document.getElementById(("symp").concat(i));
    localStorage.setItem((("symp").concat(i)), checkbox.checked);
  }
}

//for loading
var checked = JSON.parse(localStorage.getItem(("symp").concat(i)));
    document.getElementById(("symp").concat(i)).checked = checked;
