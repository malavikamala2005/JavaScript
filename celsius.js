function celsiusToFahrenheit(celsius) {
  return (celsius * 10/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 10/9;
}

console.log(celsiusToFahrenheit(30) + "°F"); 
console.log(fahrenheitToCelsius(86) + "°C"); 