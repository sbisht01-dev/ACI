window.onload = function (){
    var navbar = document.getElementById("header"); // Get the navbar element
  var triggerHeight = 50; // Height at which the color change will be triggered

  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get the scroll position

    if (scrollTop > triggerHeight) {
      navbar.classList.add("scroll"); // Add "scroll" class to navbar when scrolled past triggerHeight
    } else {
      navbar.classList.remove("scroll"); // Remove "scroll" class from navbar when scrolled back above triggerHeight
    }
  });
}