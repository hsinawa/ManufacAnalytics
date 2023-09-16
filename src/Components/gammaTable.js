import React from "react";
import { findMode } from "./findMode";

//Importing Static Files
import winesData from "../Static Files/Wine-Data.json";
import textData from "../Static Files/staticText.json";
import "../Styles/tableStyle.css";



const GammaTable = () => {
  //Grouping Data of every Wine together based on Gamma Value (Ash*Hue)/Magnesium
  const groupedData = {};

  winesData.forEach((item) => {
    const alchoholClass = item.Alcohol;

    if (!groupedData[alchoholClass]) {
      groupedData[alchoholClass] = [];
    }

    const gamma = (item.Ash * item.Hue) / item.Magnesium;

    groupedData[alchoholClass].push(gamma);
  });

  //Storing All Means Values
  const meanValues = {};

  for (const alchoholClass in groupedData) {
    if (Object.hasOwnProperty.call(groupedData, alchoholClass)) {
      const group = groupedData[alchoholClass];
      const total = group.reduce((sum, item) => sum + item, 0);
      const mean = total / group.length;
      meanValues[alchoholClass] = mean.toFixed(3);
    }
  }

  const medianValues = {};

  for (const alchoholClass in groupedData) {
    if (Object.hasOwnProperty.call(groupedData, alchoholClass)) {
      const group = groupedData[alchoholClass]
        .map((item) => item)
        .sort((a, b) => a - b);
      const middle = Math.floor(group.length / 2);

      if (group.length % 2 === 0) {
        medianValues[alchoholClass] = (group[middle - 1] + group[middle]) / 2;
      } else {
        medianValues[alchoholClass] = group[middle];
      }
    }
  }

  const modeValues = {};

  for (const alchoholClass in groupedData) {
    if (Object.hasOwnProperty.call(groupedData, alchoholClass)) {
      const group = groupedData[alchoholClass].map((item) => item);
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
        median: medianValues[alchoholClass].toFixed(3),
        mode: findMode(modeValues[alchoholClass]), // Finding Mode for Every New Gamma Values of each Class of Alchohol
      };
    }
  }

  return (
    <React.Fragment>
      <table class="table">
        <tr>
          <th> {textData.tableText.meausre} </th>

          {Object.values(groupedResults).map((i, key) => {
            return (
              <td data-label={`${textData.tableText.meausre}`}>
                {" "}
                Class {++key}{" "}
              </td>
            );
          })}
        </tr>

        <tr>
          <th>
            {textData.tableText.gama} {textData.tableText.mean}{" "}
          </th>

          {Object.values(groupedResults).map((i, key) => {
            return (
              <td
                data-label={`${textData.tableText.gama} ${textData.tableText.mean}`}
              >
                {i.mean}
              </td>
            );
          })}
        </tr>

        <tr>
          <th>
            {textData.tableText.gama} {textData.tableText.median}{" "}
          </th>

          {Object.values(groupedResults).map((i, key) => {
            return (
              <td
                data-label={`${textData.tableText.gama} ${textData.tableText.median}`}
              >
                {i.median}
              </td>
            );
          })}
        </tr>

        <tr>
          <th>
            {textData.tableText.gama} {textData.tableText.mode}{" "}
          </th>

          {Object.values(groupedResults).map((i, key) => {
            return (
              <td
                data-label={`${textData.tableText.gama} ${textData.tableText.mode}`}
              >
                {i.mode}
              </td>
            );
          })}
        </tr>
      </table>
    </React.Fragment>
  );
};

export default GammaTable;
