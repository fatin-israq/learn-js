// Create a function 'convertTemperature (degrees, unit)' that takes a number and a unit ('C' or 'F'), and converts it into the other unit.

function convertToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function convertTemperature(degrees, unit) {
  if (unit == "C") {
    return convertToFahrenheit(degrees);
  } else if (unit == "F") {
    return convertToCelsius(degrees);
  }
}

console.log(convertTemperature(25, "C") + " F");
console.log(convertTemperature(86, "F") + " C");
