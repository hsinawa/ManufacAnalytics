import React from "react";

//Importing Static Files
import winesData from "../Static Files/Wine-Data.json";
import textData from "../Static Files/staticText.json";
import "../Styles/tableStyle.css";

const AlchoholTable = () => {
  //Grouping Data of every Wine together
  const groupedData = {};

  winesData.forEach((item) => {
    const alchoholClass = item.Alcohol;

    if (!groupedData[alchoholClass]) {
      groupedData[alchoholClass] = [];
    }

    groupedData[alchoholClass].push(item);
  });

  //Storing Mean Values based on Property = 'Flavanoids' : Upto 3 Decimal Places as Stated in Assignment
  const meanValues = {};

  for (const alchoholClass in groupedData) {
    if (Object.hasOwnProperty.call(groupedData, alchoholClass)) {
      const group = groupedData[alchoholClass];
      const total = group.reduce((sum, item) => sum + item["Flavanoids"], 0);
      const mean = total / group.length;
      meanValues[alchoholClass] = mean.toFixed(3);
    }
  }

  //Storing Median Values based on Property = 'Flavanoids'
  const medianValues = {};

  for (const alchoholClass in groupedData) {
    if (Object.hasOwnProperty.call(groupedData, alchoholClass)) {
      const group = groupedData[alchoholClass]
        .map((item) => item["Flavanoids"])
        .sort((a, b) => a - b);
      const middle = Math.floor(group.length / 2);

      if (group.length % 2 === 0) {
        medianValues[alchoholClass] = (group[middle - 1] + group[middle]) / 2;
      } else {
        medianValues[alchoholClass] = group[middle];
      }
    }
  }

  // Storing Mode Values based on Property = 'Flavanoids': As there can be multiple modes, so we will use array to store modes
  const modeValues = {};

  for (const alchoholClass in groupedData) {
    if (Object.hasOwnProperty.call(groupedData, alchoholClass)) {
      const group = groupedData[alchoholClass].map(
        (item) => item["Flavanoids"]
      );
      const frequency = {};

      group.forEach((value) => {
        frequency[value] = (frequency[value] || 0) + 1;
      });

      let mode = [];
      let maxFrequency = 0;

      for (const value in frequency) {
        if (Object.hasOwnProperty.call(frequency, value)) {
          if (frequency[value] > maxFrequency) {
            mode = [value];
            maxFrequency = frequency[value];
          } else if (frequency[value] === maxFrequency) {
            mode.push(value);
          }
        }
      }

      modeValues[alchoholClass] = mode;
    }
  }

  const groupedResults = {};

  for (const alchoholClass in meanValues) {
    if (Object.hasOwnProperty.call(meanValues, alchoholClass)) {
      groupedResults[alchoholClass] = {
        name: alchoholClass,
        mean: meanValues[alchoholClass],
        median: medianValues[alchoholClass],
        mode: modeValues[alchoholClass],
      };
    }
  }

  console.log("Grouped Result is", Object.values(groupedResults));

  return (
    <React.Fragment>
      <table class="table">
        <thead>
          <th> {textData.tableText.meausre} </th>
          <th>
            {" "}
            {textData.tableText.flavanoids} {textData.tableText.mean}{" "}
          </th>
          <th>
            {" "}
            {textData.tableText.flavanoids} {textData.tableText.median}{" "}
          </th>
          <th>
            {" "}
            {textData.tableText.flavanoids} {textData.tableText.mode}{" "}
          </th>
        </thead>
        <tbody>
            {
                Object.values(groupedResults).map(i=>{
                    return <tr>
                        <td data-label={`${textData.tableText.meausre}`}> Class {i.name}</td>
            <td
              data-label={`${textData.tableText.flavanoids} ${textData.tableText.mean}`}
            >
             {i.mean}
            </td>
            <td
              data-label={`${textData.tableText.flavanoids} ${textData.tableText.median}`}
            >
             {i.median}
            </td>
            <td
              data-label={`${textData.tableText.flavanoids} ${textData.tableText.mode}`}
            >
                {i.mode.map(j=>{
                    return <span> {j} ,  </span>
                })}
            </td>
                        </tr>
                })
            }
          {/* <tr>
            <td data-label={`${textData.tableText.meausre}`}>hi</td>
            <td
              data-label={`${textData.tableText.flavanoids} ${textData.tableText.mean}`}
            >
              2.83
            </td>
            <td
              data-label={`${textData.tableText.flavanoids} ${textData.tableText.median}`}
            >
              {" "}
              2.8
            </td>
            <td
              data-label={`${textData.tableText.flavanoids} ${textData.tableText.mode}`}
            ></td>
          </tr> */}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default AlchoholTable;
