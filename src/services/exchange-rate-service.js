export default class ExchangeRateService {
  static getExchangeRates() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.APP_KEY}/latest/USD`)
      .then((response) => {
        if (!response.ok) {
          const errorMessage = `Error: ${response.result} ${response["error-type"]}`;
          throw new Error(errorMessage);
        } else {
          response.json();
        }
      })
      .catch((error) => {
        return error;
      });
  }
}