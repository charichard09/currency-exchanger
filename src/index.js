import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './services/exchange-rate-service.js';
import exchangeUSDto from './js/exchange-USD-to.js';

//UI Logic
function printExchange(usdAmount, usdExchanged, currenyTo) {
  document.getElementById("showResponse").innerText = `${usdAmount} USD is ${usdExchanged} ${currenyTo}`;
}

function printError(error) {
  document.getElementById("showResponse").innerText = error;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const usdAmount = parseInt(document.getElementById("usd").value);
  const currenyTo = document.getElementById("currencies").value;
  

  ExchangeRateService.getExchangeRates()
    .then((response) => {
      if (response.result === "success") {
        const usdExchanged = exchangeUSDto(usdAmount, response.conversion_rates[currenyTo]);
        printExchange(usdAmount, usdExchanged, currenyTo);
      } else {
        printError(response);
      }
    });
}

document.getElementById("convert-form").addEventListener("submit", handleFormSubmission);
