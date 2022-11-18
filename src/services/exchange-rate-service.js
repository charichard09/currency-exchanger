export default class ExchangeRateService {
  static getExchangeRates(currencyTo) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then((response) => {
        if (!response.ok) {
          return response.json()
            .then((apiErrorMsg) => {
              const errorMessage = `${response.status} ${response.statusText} ${apiErrorMsg["error-type"]}`;
              throw new Error(errorMessage);
            });
        } else {
          return response.json().
            then((currencyCodeCheck) => {
              if (Object.hasOwn(currencyCodeCheck.conversion_rates, currencyTo)) {
                return currencyCodeCheck;
              } else {
                const errorMsg = `${currencyTo} is not a proper currency code`;
                throw new Error(errorMsg);
              }
            });
        }
      })
      .catch((error) => {
        return error;
      });
  }
}