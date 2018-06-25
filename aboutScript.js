//Mobile Menu Navbar Open/Close
const navbarMenu = document.getElementById("navbarMenu");
const hamIcon = document.getElementById("hamIcon");
const closeIcon = document.getElementById("closeIcon");
const teamTitle = document.getElementById("teamTitle");
const teamNames = document.getElementById("teamNames");
const vLogo = document.getElementById("vLogo");
const loadingTxt = document.getElementById("loadingTxt");

var open=false;

function toggleNavbar() {

  if(open==false) {
    navbarMenu.classList.remove('closed');
    hamIcon.classList.add('hideOpacity');
    closeIcon.classList.remove('hideOpacity');
    open=true;
  }
  else{
    navbarMenu.classList.add('closed');
    hamIcon.classList.remove('hideOpacity');
    closeIcon.classList.add('hideOpacity');
    open=false;
  }
}

fadeCredits();

function fadeCredits() {
  // loadingTxt.classList.add('hideDisplay');
  vLogo.classList.remove('hideOpacity','blur30');
  setTimeout(function(){teamTitle.classList.remove('hideOpacity','blur')},1750);
  setTimeout(function(){teamNames.classList.remove('hideOpacity','blur')},2500);
}
