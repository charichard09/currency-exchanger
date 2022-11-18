import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService './js/exchage-rate-service.js'
import convertUSD './js/convert-USD.js'

//UI Logic
function printExchange(conversionArray) {
  const usdExchanged = exchangeUSDto(conversionArray)
  document.getElementById("showResponse").innerText = response
}

function printError(error) {
  console.log()
}

function handleFormSubmission(event) {
  event.preventDefault();
  const usdAmount = document.getElementById("usd").value;
  const dietaryNeed = document.getElementById("diet-pref").value;

  ExchangeRateService.getExchange(usdAmount)
    .then((response) => {
      if (response.result === "success") {
        printExchange(response);
      } else {
        printError(response);
      }
    });
}

document.getElementById("meal-planner").addEventListener("submit", handleFormSubmission);