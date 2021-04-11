//MODAL
/*var modal = document.getElementById("myModal");

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
}*/

//handling popup
const popupMask = document.getElementById("popupMask");
const popup = document.getElementById("symptomsPopup");
const settingsButton = document.getElementById("settings-button");
let scrollBarWidth = (function(){
  const testDiv = document.createElement("div");
  testDiv.style.width = "100%";
  testDiv.style.visibility = "hidden";
  testDiv.style.overflow = "scroll";
  document.body.appendChild(testDiv);
  const testInnerDiv = document.createElement("div");
  testInnerDiv.style.width = "100%";
  testDiv.appendChild(testInnerDiv);
  let value = testDiv.offsetWidth - testInnerDiv.offsetWidth;
  testDiv.remove();
  return value;
})();
function checkClick(e){
  if(!popup.contains(e.target) && e.target !== settingsButton){
    closePopup(popup);
  }
}
function closePopup(target){
  popupMask.style.opacity = "0";
  target.style.opacity = "0";
  window.setTimeout(function(){
    popupMask.style.display = "none";
    target.style.display = "none";
    if(popupMask.scrollHeight > popupMask.clientHeight){
      let scrollTop = parseFloat(document.body.style.top);
      document.body.style.top = "";
      document.body.style.position = "";
      document.body.style.paddingRight = "0";
      window.scrollTo(0, Math.abs(scrollTop));
    }
  }, 500);
}
function openPopup(target){
  popupMask.style.display = "block";
  target.style.display = "block";
  window.setTimeout(function(){
    popupMask.style.opacity = "1";
    target.style.opacity = "1";
  }, 1);

  //fixing body on scroll if the mask is overflowing
  if(popupMask.scrollHeight > popupMask.clientHeight){
    let scrollTop = window.pageYOffset;
    document.body.style.position = "fixed";
    document.body.style.top = "-" + scrollTop + "px";
    document.body.style.paddingRight = scrollBarWidth + "px";
  }
}
document.body.addEventListener("click", checkClick)
settingsButton.addEventListener("click", function(){
  openPopup(popup);
});
popup.getElementsByTagName("i")[0].addEventListener("click", function(){
  closePopup(popup);
});

//handling symptoms
const popupForm = popup.getElementsByTagName("form")[0];
const popupInputs = popupForm.getElementsByTagName("input");
const popupSubmit = document.getElementById("settings-submit");
const symptomsListEl = document.getElementById("symptomsListEl");
const hasSymptomsList = localStorage.getItem("settingsSymptoms") ? true:false;
let symptomsList = hasSymptomsList ? JSON.parse(localStorage.getItem("settingsSymptoms")):{};
function saveSymptoms(){
  localStorage.setItem("settingsSymptoms", JSON.stringify(symptomsList));
}
function processSymptoms(){
  for(let i = 0; i < popupInputs.length; i++){
    let symptomVal = popupInputs[i].value.replace(/-/g, " ");
    symptomsList[symptomVal] = popupInputs[i].checked;
  }
}
function listSymptoms(){
  symptomsListEl.innerHTML = "";
  for(let i in symptomsList){
    if(symptomsList[i]){
      let newLi = document.createElement("li");
      newLi.textContent = i;
      symptomsListEl.appendChild(newLi);
    }
  }
}
if(!hasSymptomsList){
  processSymptoms();
  saveSymptoms();
}
else {
  for(let i = 0; i < popupInputs.length; i++){
    let symptomVal = popupInputs[i].value.replace(/-/g, " ");
    if(symptomsList[symptomVal]){
      popupInputs[i].checked = true;
    }
    else {
      popupInputs[i].checked = false;
    }
  }
}
listSymptoms();
popupSubmit.addEventListener("click", function(){
  processSymptoms();
  listSymptoms();
  saveSymptoms();
  closePopup(popup);
})

//Checkbox
//commented out because apparently there's an error here and the script won't function
/*function saveInfo() {
  for (i=1; i<=8; i++){
    String tempVar = (("checkbox").concat(i));
    var tempVar = document.getElementById(("symp").concat(i));
    localStorage.setItem((("symp").concat(i)), checkbox.checked);
  }
}

//for loading
var checked = JSON.parse(localStorage.getItem(("symp").concat(i)));
    document.getElementById(("symp").concat(i)).checked = checked;*/

//toggling show password/show dots
const passwordButton = document.getElementById("passwordEye");
const passwordEl = document.getElementById("password");
passwordButton.addEventListener("click", function(e){
  if(passwordEl.type === "password"){
    passwordEl.type = "text";
    e.target.textContent = "visibility_off";
  }
  else {
    passwordEl.type = "password";
    e.target.textContent = "visibility";
  }
});

//character count on bio
const bioEl = document.getElementById("bio");
const characterCount = document.getElementById("bioAfter");
characterCount.textContent = bioEl.value.length + "/250 characters";
bioEl.addEventListener("keyup", function(){
  characterCount.textContent = bioEl.value.length + "/250 characters";
})
