// let trainingData
// console.log(`Predicted AQI: ${finalResult}`);
setTimeout(() => {
  fetch("./CSV/DELHIAQI.csv")
    .then((response) => response.text())
    .then((csvData) => {
      // split the CSV data into lines
      const lines = csvData.split("\n");
      console.log("starts");
      // create an array to store the output
      const output = [];

      // iterate over each line
      for (let i = 0; i < lines.length; i++) {
        // split the line into individual values
        const values = lines[i].split(",");

        // extract the date and AQI values
        const date = values[1].split("-");
        const month = parseFloat(parseInt(date[1]) / 11).toFixed(2);
        const day = parseFloat(parseInt(date[2]) / 31).toFixed(2);
        const aqi = parseFloat(parseInt(values[14]) / 500).toFixed(2);
        // add the values to the output array
        output.push([month, day, aqi]);
        // console.log(output)
      }
      const trainData = output.map((arr) => ({
        input: { date: parseFloat(arr[0]), month: parseFloat(arr[1]) },
        output: { AQI: parseFloat(arr[2]) },
      }));

      const net = new brain.NeuralNetwork({
        // Two input nodes for the month and date, and one output node for the predicted AQI
        inputSize: 2,
        outputSize: 1,
        // One hidden layer with 3 nodes
        hiddenLayers: [3],
      });
      const minAQI = 20; // Minimum AQI value in your training data
      const maxAQI = 600; // Maximum AQI value in your training data

      // Prepare your data
      //   trainingData = [
      //     { input: { date: 0.09, month: 0.03 }, output: { AQI: 0.94 } },
      //    //more data
      //   ];
      // console.log(trainData)

      net.train(trainData);

      // Define a scaling function to convert the output value back to AQI
      function scaleOutput(output, minAQI, maxAQI) {
        // Scale the output value to the range of AQI values in your training data
        return Math.round(output * (maxAQI - minAQI) + minAQI);
      }
      let j = 1;
      for (let i = 1; i <= 30; i++) {
        let test = { date: i / 31, month: 1 / 11 };
        // Use the scaling function to get the predicted AQI
        const finalResult = scaleOutput(net.run(test).AQI, minAQI, maxAQI);
        console.log(`Predicted AQI: ${finalResult}`);
        console.log(i);
      }

      let manual = { date: 9 / 31, month: 5 / 11 };

      const manualResult = scaleOutput(net.run(manual).AQI, minAQI, maxAQI);

      console.log(manualResult);
    });
}, 5000);

// Good (0-50)

// Satisfactory (51-100)

// Moderately_Polluted (101-200)

// Poor (201-300)

// Very_poor(301-400)

// Severe (401-500)
