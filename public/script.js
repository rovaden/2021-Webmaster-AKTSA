//navigation on mobile
const navMenu = document.getElementById("navMenu");
if(navMenu.style.display !== "none"){
  const navBar = document.getElementsByTagName("nav")[0];
  navMenu.addEventListener("click", function(){
    navBar.classList.toggle("active");
  });

  //dropdown menus toggle function
  let toggleDropdown = function(liEl, divEl){
    //getting elements + target height
    const aEl = liEl.firstChild;
    const target = divEl;
    const maxHeight = divEl.scrollHeight;
    let clicks = 0;

    //event handler function that toggles height
    return function(){
      clicks++;
      aEl.classList.toggle("active");
      if(clicks % 2 === 0){
        target.style.maxHeight = "0";
      }
      else {
        target.style.maxHeight = maxHeight + "px";
      }
    };
  }

  //looping through dropdown menus in the navigation bar
  const dropDowns = navBar.getElementsByClassName("dropdown");
  for(let i = 0; i < dropDowns.length; i++){
    const divEl = dropDowns[i].parentElement,
    liEl = divEl.parentElement;
    liEl.addEventListener("click", toggleDropdown(liEl, divEl));
  }
}