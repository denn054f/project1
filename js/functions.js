'use strict'

let prevScrollpos = window.pageYOffset;

function $(id) {
    return document.getElementById(id);
}


window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("topnav").style.top = "0";
    $("sidenav").style.top = "10%";
  } else {
    $("topnav").style.top = "-10%";
    $("sidenav").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
}

$("topnav").style.transition = ".2s";
$("sidenav").style.transition = ".2s";
