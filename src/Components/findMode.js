export function findMode(arr) {
    const frequencyMap = {};
  
    for (const value of arr) {
      if (frequencyMap[value]) {
        frequencyMap[value]++;
      } else {
        frequencyMap[value] = 1;
      }
    }
  
    let mode;
    let maxFrequency = 0;
  
    for (const value in frequencyMap) {
      if (frequencyMap[value] > maxFrequency) {
        mode = value;
        maxFrequency = frequencyMap[value];
      }
    }
  
    mode = parseFloat(mode).toFixed(3);
  
    return mode;
  }