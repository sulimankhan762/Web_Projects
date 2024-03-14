// const navbarr = document.getElementsByClassName('navbar');
// for (var i = 0; i < navbarr.length; i++) {
//     navbarr[i].style.borderBottom = "3px solid gray";
// }
// var navbar = document.getElementByClass('navbar');

// navbar.style.borderBottom = 'solid 5px #000';

// var navbar = document.querySelector("navbar");
// navbar.style.borderBottom = '4px solid gray';

// navbar




// <!-- ########### Smooth Sccrolling #########  -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

$(document).ready(function(){
// Add smooth scrolling to all links
$("a").on('click', function(event) {

// Make sure this.hash has a value before overriding default behavior
if (this.hash !== "") {
  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
} // End if
});
});
