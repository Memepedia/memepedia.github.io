var navbutt = document.getElementById("navbutton");

function openNav() {
  document.getElementById("mySidenav").style.width = "12vw";
  document.getElementById("main").style.marginLeft = "12vw";
  navbutt
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
