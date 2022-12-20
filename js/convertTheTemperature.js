/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
  let toKelvin;
  let toFahrenheit;
  toKelvin = celsius + 273.15;
  toFahrenheit = celsius * 1.80 + 32.00
  let ans = [toKelvin, toFahrenheit]
  return ans
};