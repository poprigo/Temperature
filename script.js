function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById("inputTemp").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  let result;
  let formula;

  // Check if the input fields are empty
  const tempError = document.getElementById("tempError");
  tempError.textContent = "";

  if (!inputTemp) {
    tempError.textContent = "Temperature is required.";
    return;
  }

  if (fromUnit === "celsius" && toUnit === "fahrenheit") {
    result = (inputTemp * 9 / 5) + 32;
    formula = `${inputTemp} °C × 9/5 + 32 = ${result.toFixed(2)} °F`;
  } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
    result = (inputTemp - 32) * 5 / 9;
    formula = `${inputTemp} °F - 32 × 5/9 = ${result.toFixed(2)} °C`;
  } else if (fromUnit === "celsius" && toUnit === "kelvin") {
    result = inputTemp + 273.15;
    formula = `${inputTemp} °C + 273.15 = ${result.toFixed(2)} K`;
  } else if (fromUnit === "kelvin" && toUnit === "celsius") {
    result = inputTemp - 273.15;
    formula = `${inputTemp} K - 273.15 = ${result.toFixed(2)} °C`;
  } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
    result = (inputTemp + 459.67) * 5 / 9;
    formula = `(${inputTemp} °F + 459.67) × 5/9 = ${result.toFixed(2)} K`;
  } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
    result = (inputTemp * 9 / 5) - 459.67;
    formula = `(${inputTemp} K × 9/5) - 459.67 = ${result.toFixed(2)} °F`;
  } else if (fromUnit === "rankine" && toUnit === "celsius") {
    result = (inputTemp - 491.67) * 5 / 9;
    formula = `(${inputTemp} °R - 491.67) × 5/9 = ${result.toFixed(2)} °C`;
  } else if (fromUnit === "celsius" && toUnit === "rankine") {
    result = (inputTemp * 9 / 5) + 491.67;
    formula = `${inputTemp} °C × 9/5 + 491.67 = ${result.toFixed(2)} °R`;
  } else if (fromUnit === "rankine" && toUnit === "fahrenheit") {
    result = inputTemp - 459.67;
    formula = `${inputTemp} °R - 459.67 = ${result.toFixed(2)} °F`;
  } else if (fromUnit === "fahrenheit" && toUnit === "rankine") {
    result = inputTemp + 459.67;
    formula = `${inputTemp} °F + 459.67 = ${result.toFixed(2)} °R`;
  } else if (fromUnit === "rankine" && toUnit === "kelvin") {
    result = inputTemp * 5 / 9;
    formula = `${inputTemp} °R × 5/9 = ${result.toFixed(2)} K`;
  } else if (fromUnit === "kelvin" && toUnit === "rankine") {
    result = inputTemp * 9 / 5;
    formula = `${inputTemp} K × 9/5 = ${result.toFixed(2)} °R`;
  } else {
    result = inputTemp; // If units are the same
    formula = `No conversion needed (${inputTemp} ${fromUnit} = ${result.toFixed(2)} ${toUnit})`;
  }

  document.getElementById("result").innerText = `${inputTemp} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
  document.getElementById("formula").innerText = `Conversion Formula: ${formula}`;

  const resultElement = document.getElementById("result");
  const formulaElement = document.getElementById("formula");

  if (!isNaN(result)) {
    resultElement.style.display = "block"; // Show the result box
    formulaElement.style.display = "block"; // Show the formula
    resultElement.innerText = `${inputTemp} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
    formulaElement.innerText = `Conversion Formula: ${formula}`;
  } else {
    resultElement.style.display = "none"; // Hide the result box
    formulaElement.style.display = "none"; // Hide the formula
  }
}