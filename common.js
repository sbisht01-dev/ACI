window.onload = function () {
  console.log("hi");
  let hd =
    '<div id="logo"> <img src="rsrc/newlogo.png"> </div>' +
    '<nav class="navigation-link">' +
    '<ul>' +
    '<a class="links" id="home" href="index.html"><li>HOME</li></a>' +
    '<a class="links" id="what" href="os.html"><li> OUR SERVICES</li>' +
    '</a>' +
    '<a class="links" id="get" href="ge.html"><li>GET ENVOLVED</li></a>' +
    '<a class="links" id="about" href="about.html"><li>ABOUT</li></a>' +
    '</ul>' +
    '</nav>' +
    '<div class="contact"><button>CONTACT US</button></div>';
  document.querySelector(".header").innerHTML = hd;
  console.log("hi");
};
