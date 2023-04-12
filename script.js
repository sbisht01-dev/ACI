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

  const text =
    "The concentration of carbon dioxide in the atmosphere has increased about 50% since the pre-industrial era, primarily due to human activities."; // Text to be typed
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
};
