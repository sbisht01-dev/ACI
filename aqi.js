console.log("hi");
window.onload = function () {
  let token = "1787d4e7ba4eb264b0e47eb236fabf1b899f71ea";
  let URL = "https://api.waqi.info/feed/here/?token=";
  let lt = "DELHI2015AQI";
  let barChart = null;
  let x = [];
  let y = [];
  let xlables = [];
  let ylables = [];
  let xV = [];
  let yV = [];
  let k = 10;
  let auto = 1

  chartt(lt)
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

  function addFlex() {
    let divFlex = document.getElementById("chartOne");
    divFlex.classList.add("chartFlex");
    divFlex.classList.remove("chartCenter");
  }

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

  // document.querySelector("#all").addEventListener("click", () => {
  //   lt = "DELHIAQI";
  //   chartt(lt);
  // });
  document.querySelector("#five").addEventListener("click", () => {
    lt = "DELHI2015AQI";
    addFlex();
    let text = document.querySelector(".start-info");
    text.classList.add("hidden");
    auto = 0
    let aqiInfo = document.getElementById("aqiInfo")
    const info = "The high level of air pollution in Delhi during 2015, as indicated by the average AQI of about 307, poses significant health risks for the city's residents. Exposure to such hazardous air quality can cause a range of respiratory and cardiovascular problems, including asthma, lung cancer, and heart disease.In addition, prolonged exposure to high levels of air pollution can have long-term effects on the environment, such as increased greenhouse gas emissions and reduced biodiversity. It is essential for policymakers, industries, and individuals to take steps to reduce air pollution levels in Delhi and other polluted cities worldwide to mitigate the adverse effects of air pollution on public health and the environment. This may include measures such as promoting cleaner energy sources, reducing vehicular emissions, and improving waste management practices."
    chartt(lt,info);
  })
  // document.querySelector("#eight").addEventListener("click", () => {
  //   lt = "DELHI2018AQI";
  //   chartt(lt);
  // });
  document.querySelector("#twenty").addEventListener("click", () => {
    lt = "DELHI2020AQI";
    addFlex();
    auto = 0
    
    let text = document.querySelector(".start-info");
    text.classList.add("hidden");
    let aqiInfo = document.getElementById("aqiInfo")
    const info = "The implementation of lockdown during the COVID-19 pandemic led to a significant improvement in the air quality of Delhi, with the average AQI dropping to around 181. The reduction in vehicular traffic and industrial activity played a crucial role in improving the air quality. Sustainable measures such as promoting public transportation and clean energy technologies are needed to sustain this improvement."
    chartt(lt,info);
  });

  async function getAirData(lt) {
    x = [];
    y = [];
    xlables = [0];
    ylables = [0];

    let response = await fetch("csv/" + lt + ".csv");
    let data = await response.text();
    let rows = data.split("\n");

    function numberOfDays() {
      
      if(auto==0){
        k = prompt("Enter Number of Days");
      }
      if (k < 366 && k >= 1) {
        // console.log(k);

        rows.forEach((elt) => {
          const row = elt.split(",");
          const year = row[1];
          const aqi = row[14];
          x.push(year);
          y.push(aqi);

          for (let index = 0; index < k; index++) {
            if (lt == "DELHI2020AQI" && k > 190) {
              k = 185;
              xlables[index] = index;
              ylables[index] = y[index];
            } else {
              xlables[index] = index;
              ylables[index] = y[index];
            }
          }

          // for (let index = 0; index < k; index++){
          //   console.log(xlables[index])
          // }
        });
        // console.log(xlables.length);
      } else {
        alert("Value of days should be less than 365");
        numberOfDays();
        // window.location.reload();
      }
    }
    numberOfDays();
  }

  async function chartt(lt,k,info) {
    const ctx = document.getElementById("chart").getContext("2d");
    if (barChart != null) {
      barChart.destroy();
    }
    await getAirData(lt);
    // console.log(k)
    if(auto=0){
      aqiInfo.innerText = `${info}`
    }
    barChart = new Chart(ctx, {
      type: "line",
      data: (data = {
        labels: xlables,
        datasets: [
          {
            label: "Air Quality Index",
            data: ylables,
            backgroundColor: "rgba(56, 132, 192, 0.2)", // Bar color
            borderColor: "rgba(100, 200, 200, 1)", // Bar border color
            borderWidth: 1, // Bar border width
          },
        ],
      }),
      // Configuration options for the chart
      options: {
        maintainAspectRatio:false,
        plugins: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              font: {
                size: 32,
                wight: 500,
                family: "Noto Sans",
              },
            },
          },
        },
        animation: {
          tension: {
            duration: 1000,
            easing: "linear",
            from: 1,
            to: 0,
            loop: true,
          },
        },
        scales: {
          y: {
            // defining min and max so hiding the dataset does not change scale range
            min: 0,
            max: 500,
          },
        },
        fill: true,
        responsive: true,
      },
    });
  }

  document.getElementById("vehicle-button").addEventListener("click", () => {
    vehicleChart();
    console.log("done");
  });

  async function getVehicleData() {
    let response = await fetch("csv/vehicle.csv");
    let data = await response.text();
    let rows = data.split("\n");

    x = [];
    y = [];
    xV = [0];
    yV = [0];

    rows.forEach((elt) => {
      const row = elt.split(",");
      const year = row[0];
      const totalVehicle = row[1];
      x.push(year);
      y.push(totalVehicle);
      for (let index = 0; index < x.length; index++) {
        xV[index] = x[index];
        yV[index] = y[index];
      }
    });
  }

  async function vehicleChart() {
    const ctx = document.getElementById("vehicle").getContext("2d");
    await getVehicleData();
    let vehicleChart = new Chart(ctx, {
      type: "line",
      data: (data = {
        labels: xV,
        datasets: [
          {
            label: "Total Vehicles on Earth",
            data: yV,
            backgroundColor: "rgba(56, 132, 192, 0.2)", // Bar color
            borderColor: "rgba(00, 200, 200, 1)", // Bar border color
            borderWidth: 1, // Bar border width
          },
        ],
      }),
      // Configuration options for the chart
      options: {
        plugins: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              font: {
                size: 32,
                wight: 500,
                family: "Noto Sans",
              },
            },
          },
        },
        animation: {
          tension: {
            duration: 1000,
            easing: "linear",
            from: 1,
            to: 0,
            loop: true,
          },
        },
        scales: {
          y: {
            // defining min and max so hiding the dataset does not change scale range
            min: 0,
            max: 30000000,
          },
        },
        fill: true,
        responsive: true,
      },
    });
    console.log(xV, yV);
  }
};
