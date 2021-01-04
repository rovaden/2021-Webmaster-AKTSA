//navigation on mobile
const navMenu = document.getElementById("navMenu");
if(navMenu.style.display !== "none"){
  const navBar = document.getElementsByTagName("nav")[0];
  navMenu.addEventListener("click", function(){
    navBar.classList.toggle("active");
  });
}