
let hasSetUpMobile = false;
let allowScrollAnim = true;
const navBar = document.getElementsByTagName("nav")[0];

//getting whether or not account is logged in, updating nav bar accordingly
const loggedIn = localStorage.getItem("katKureLoggedIn");
if(loggedIn === "true"){
  const accountEl = navBar.getElementsByClassName("accountLink")[0];
  if(accountEl !== undefined){
    const linkEl = accountEl.getElementsByTagName("a")[0];
    if(linkEl.textContent === "Log In") {
      //inserting icon and changing content to name
      let newIcon = document.createElement("i");
      newIcon.className = "material-icons";
      newIcon.textContent = "account_circle";
      linkEl.textContent = "Jane Doe";
      linkEl.href = "#";
      linkEl.insertBefore(newIcon, linkEl.firstChild);

      //making it a dropdown menu
      linkEl.className = "dropdown-top loggedIn";
      let newDropdown = document.createElement("div"),
      newDropList = document.createElement("ul"),
      newDashLink = document.createElement("li"),
      logOut = document.createElement("li");
      if(window.location.href.includes("public")){
        newDashLink.innerHTML = "<a href = \"" + window.location.href.split("public/")[0] + "public/account/dashboard.html\">Dashboard</a>";
      }
      else {
        newDashLink.innerHTML = "<a href = \"" + window.location.href.split("/")[0] + "account/dashboard.html\">Dashboard</a>";
      }

      //logout button
      logOut.innerHTML = "<a href = \"" + location.href + "\" class = \"log-out-button\">Log out</a>";
      logOut.addEventListener("click", function(){
        localStorage.setItem("katKureLoggedIn", "false");
      });

      //appending stuff
      newDropList.appendChild(newDashLink);
      newDropList.appendChild(logOut);
      newDropList.className = "dropdown";
      newDropdown.appendChild(newDropList);
      accountEl.appendChild(newDropdown);
    }
    else {
      const logOuts = document.getElementsByClassName("log-out-button");
      for(let i = 0; i < logOuts.length; i++){
        logOuts[i].addEventListener("click", function(){
          localStorage.setItem("katKureLoggedIn", "false");
          if(window.location.href.includes("account")){
            window.location.href = window.location.href.split("account/")[0] + "index.html";
          }
          else {
            window.location.href = "index.html";
          }
        });
      }
    }
  }
}

//dropdown menus toggle function for mobile
let toggleDropdown = function(liEl, divEl){
  //getting elements + target height
  const aEl = liEl.firstChild;
  const target = divEl;
  let clicks = 0;

  //removing constraint on maxHeight to account for resize
  function handleTransitionEnd(){
    target.style.maxHeight = "none";
    target.removeEventListener("transitionend", handleTransitionEnd);
  }

  //event handler function that toggles height
  return function(){
    clicks++;
    aEl.classList.toggle("active");
    if(clicks % 2 === 0){
      target.style.maxHeight = target.scrollHeight + "px";
      window.setTimeout(function(){
        target.style.maxHeight = "0";
      }, 1);
    }
    else {
      target.style.maxHeight = divEl.scrollHeight + "px";
      target.addEventListener("transitionend", handleTransitionEnd);
    }
  };
}

//navigation on mobile
function setUpMobile(){
  //toggling active class when clicked
  navMenu.addEventListener("click", function(){
    navBar.classList.toggle("active");
    allowScrollAnim = !allowScrollAnim;
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
    if(!scrollWait && allowScrollAnim){
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
  return function(){
    scrollWait = false;
    window.addEventListener("scroll", handleScroll);
  }
})();

//handling both setting up mobile navigation and scrolling
function handleAll(){
  if(getComputedStyle(navMenu).display === "block"){
    if(!hasSetUpMobile){
      setUpMobile();
    }
  }
  if(document.getElementsByClassName("sidebar").length === 0){
    navBar.style.position = "fixed";
    setUpNavScroll();
  }
  navBar.classList.remove("active");
}
handleAll();
window.addEventListener("resize", handleAll);