import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './services/exchange-rate-service.js';
import exchangeUSDto from './js/exchange-USD-to.js';
import isNotDataType from './js/is-not-data-type';

//UI Logic
function printExchange(usdAmount, usdExchanged, currencyTo) {
  document.getElementById("showResponse").innerText = `${usdAmount} USD is ${usdExchanged} ${currencyTo}`;
}

function printError(error) {
  document.getElementById("showResponse").innerText = error;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const usdAmount = document.getElementById("usd").value;
  const currencyTo = document.getElementById("currencies").value.toUpperCase();
  
  if (isNotDataType(currencyTo, "string") && isNotDataType(usdAmount, "numberString")) {
    const errorMsg = `Error: Currency Code field is blank. Please select a currency code to convert USD to. 
    Error: USD amount is blank. Please enter a USD amount to convert to.`;
    printError(errorMsg);
    return undefined;
  } else if (isNotDataType(currencyTo, "string")) {
    const errorMsg = "Error: Currency Code field is blank. Please select a currency code to convert USD to.";
    printError(errorMsg);
    return undefined;
  } else if (isNotDataType(usdAmount, "numberString")) {
    const errorMsg = "Error: USD amount is blank. Please enter a USD amount to convert to.";
    printError(errorMsg);
    return undefined;
  }
  
  ExchangeRateService.getExchangeRates(currencyTo)
    .then((response) => {
      if (response.result === "success") {
        const usdExchanged = exchangeUSDto(usdAmount, response.conversion_rates[currencyTo]);
        printExchange(usdAmount, usdExchanged, currencyTo);
      } else {
        printError(response);
      }
    });
}

document.getElementById("convert-form").addEventListener("submit", handleFormSubmission);
