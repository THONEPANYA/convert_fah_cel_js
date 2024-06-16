function toCelsius()
{
    let fahrenheit = prompt("Enter Fahrenhiet:")
    let value = (fahrenheit - 32) * 5 / 9

    document.getElementById("answer-section").innerHTML = value.toFixed(2) + "C" + "<br>";

}

function toFahrenheit()
{
    let celsius = prompt("Enter Celsius")
    let valueF = (celsius * 9/5) + 32

    document.getElementById("fahrenheit").innerHTML = valueF.toFixed(2) + "F" + "<br>";

}

toFahrenheit()

toCelsius()