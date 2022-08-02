/* celsius-to-fahrenheit.js */
function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
}
 
const celsiusInput = process.argv[3]; // Get the 3rd input from the argument list
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);
 
console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);