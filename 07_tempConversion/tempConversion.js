const convertToCelsius = function(givenTempFahren) {
  let celsiusTemp = (givenTempFahren - 32) * 5 / 9;
  return Math.round(celsiusTemp * 10) / 10;
};

const convertToFahrenheit = function(givenTempCelsius) {
  let fahrenTemp = givenTempCelsius * 9 / 5 + 32;
  return Math.round(fahrenTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
