

window.onload = () => {
  let token = "1787d4e7ba4eb264b0e47eb236fabf1b899f71ea";
  let URL = "https://api.waqi.info/feed/ghaziabad/?";
  let aqiBtn = document.getElementById("aqiBtn");
  let aqi = null
  aqiBtn.addEventListener("mouseover", () => {
    console.log("AQI btn working");
  });

  //   // get the navigation item and the div to be displayed
  //   const navItem = document.getElementById("aqiBtn");
  //   const hoverDiv = document.getElementById("liveAqiInfo");

  //   // add event listener to the navigation item
  //   navItem.addEventListener("mouseover", () => {
  //     // calculate the position of the navigation item
  //     const navItemRect = navItem.getBoundingClientRect();
  //     const navItemTop = navItemRect.top + window.scrollY;
  //     const navItemLeft = navItemRect.right + window.scrollX;

  //     // set the position of the hover div
  //     hoverDiv.style.top = `${navItemTop + navItemRect.height}px`;
  //     hoverDiv.style.right = `${navItemLeft}px`;
  //     hoverDiv.style.height = "100px";
  //     hoverDiv.style.width = "100px";
  //     hoverDiv.style.backgroundColor = "red";
  //     hoverDiv.style.zIndex = "400";

  //     // display the hover div
  //     hoverDiv.style.display = "block";
  //   });

  //   // add event listener to hide the hover div when mouse leaves the navigation item
  //   navItem.addEventListener("mouseout", () => {
  //     hoverDiv.style.display = "none";
  //   });
  console.log("hello")

  function fetchAQI(URL, token) {
    fetch('https://api.waqi.info/feed/ghaziabad/?token=1787d4e7ba4eb264b0e47eb236fabf1b899f71ea')
    .then(response => response.json())
    .then(data => {
      console.log(data.data.aqi)
 
    })    
    .catch((err)=>{
        console.log(err,Error)
    })
  }
  
  fetchAQI(URL, token);
};

