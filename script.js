//***********window on load is used because the script is executes before DOM is fully loaded
//***********that's why it returns null
window.onload = function () {
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

  // ********************************************************************************************************************
  let text =
    "The concentration of carbon dioxide in the atmosphere has increased about 50% since the pre-industrial era, primarily due to human activities."; // Text to be typed

  function front() {
    const typingText = document.getElementById("typing-text"); // Span element for typing text
    const typingCursor = document.getElementById("typing-cursor"); // Span element for typing cursor

    let index = 0; // Index to keep track of current character

    function type() {
      if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 20); // Delay between each character typing
      } else {
        typingCursor.style.display = "none"; // Hide typing cursor when typing is complete
      }
    }

    type(); // Call the typing function to start the animation
  }
  front();

  let cta = document.querySelector(".CTA");
  cta.addEventListener("mouseenter", () => {
    // addition typing class enter + the text
    console.log();
    let emission = document.querySelector(".emission");
    emission.style.fontSize = "1rem ";
    emission.style.fontWeight = "500";
    function add() {
      emission.innerHTML = "Carbon Emission of this website is 4.61gm.";
      emission.style.padding = "16px";
    }
    setTimeout(add, 200);
  });
  cta.addEventListener("mouseleave", () => {
    // removal of the typing class remove + the text
    let emission = document.querySelector(".emission");
    emission.innerText = "!";
    function remove() {
      emission.style.fontSize = "2rem";
    }
    setTimeout(remove, 100);
  });
};
