function myMenu(menuItem) {
  'var' i;
    var x = document.getElementsByClassName("panels");
  for (i = 0; i < x.length; i++) {
  var  x[i].style.display = "none";
  }
  document.getElementById(menuItem).style.display = "block";
}


// SLIDESHOW
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
