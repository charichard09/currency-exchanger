import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './services/exchage-rate-service.js';
import exchangeUSDto from './js/exchange-USD-to.js';

//UI Logic
function printExchange(usdAmount, usdExchanged, currenyTo) {
  // pass conversion rate number i.e. 3.6725 to exchangeUSDto
  // const usdExchanged = exchangeUSDto(usd, conversionArray[1])
  document.getElementById("showResponse").innerText = `${usdAmount} USD is ${usdExchanged} ${currenyTo}`;
}

function printError(error) {
  document.getElementById("showResponse").innerText = error;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const usdAmount = document.getElementById("usd").value;
  const currenyTo = document.getElementById("currencies").value;

  ExchangeRateService.getExchangeRates()
  // work on here
    .then((response) => {
      if (response.result === "success") {
        const usdExchanged = exchangeUSDto(usdAmount, response.conversion_rates[currenyTo]);
        printExchange(usdAmount, usdExchanged, currenyTo);
      } else {
        printError(response);
      }
    });
}

document.getElementById("convert-button").addEventListener("submit", handleFormSubmission);