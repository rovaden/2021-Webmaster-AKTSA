
let hasSetUpMobile = false;
let allowScrollAnim = false;
const navBar = document.getElementsByTagName("nav")[0];

//dropdown menus toggle function for mobile
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

//navigation on mobile
function setUpMobile(){
  //toggling active class when clicked
  navMenu.addEventListener("click", function(){
    navBar.classList.toggle("active");
  });

  //looping through dropdown menus in the navigation bar
  const dropDowns = navBar.getElementsByClassName("dropdown");
  for(let i = 0; i < dropDowns.length; i++){
    const divEl = dropDowns[i].parentElement,
    liEl = divEl.parentElement;
    liEl.addEventListener("click", toggleDropdown(liEl, divEl));
  }

  //set has set up mobile to true, so it's not needed the next time
  hasSetUpMobile = true;
}

//changing navigation style on scroll
let setUpNavScroll = (function(){
  const prevClassName = navBar.className;
  let scrollWait = false;
  let handleScroll = function(){
    if(!scrollWait){
      window.requestAnimationFrame(function(){
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
          navBar.className = "navbar scrolledDown";
        }
        else {
          navBar.className = prevClassName;
        }
        scrollWait = false;
      });
      scrollWait = true;
    }
  }
  return function(initial){
    scrollWait = false;
    if(allowScrollAnim){
      if(initial){
        handleScroll();
      }
      window.addEventListener("scroll", handleScroll);
    }
    else {
      window.removeEventListener("scroll", handleScroll);
    }
  }
})();

//handling both setting up mobile navigation and scrolling
function handleAll(initial){
  if(getComputedStyle(navMenu).display === "block"){
    if(!hasSetUpMobile){
      setUpMobile();
    }
    allowScrollAnim = false;
  }
  else {
    allowScrollAnim = true;
  }
  setUpNavScroll(initial);
}
handleAll(true);
window.addEventListener("resize", handleAll);