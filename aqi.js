console.log("hi");
window.onload = function () {
  let token = "1787d4e7ba4eb264b0e47eb236fabf1b899f71ea";
  let URL = "https://api.waqi.info/feed/here/?token=";

  function type(text) {
    // Accepts text as an argument
    let index = 0; // Initialize index
    let typingText = document.getElementById("typing-textt"); // Get the element where text will be typed
    let typingCursor = document.getElementById("typing-cursorr"); // Get the element for the typing cursor

    function typeNextCharacter() {
      if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeNextCharacter, 20); // Delay between each character typing
      } 
    }

    typeNextCharacter(); // Call the inner function to start typing
  }

  let myText =
    "The concentration of carbon dioxide in the atmosphere has increased about 50% since the pre-industrial era, primarily due to human activities."; // Text to be typed // Define the text to be typed
  type(myText); // Call the type() function and pass the text as an argument

  getData()
  async function getData() {
    const response = await fetch('/test.csv');
    const data = response.text()
    console.log(response);
  }

};
