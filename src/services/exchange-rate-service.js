export default class ExchangeRateService {
  static getExchangeRates() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then((response) => {
        if (!response.ok) {
          return response.json()
            .then((apiErrorMsg) => {
              const errorMessage = `${response.status} ${response.statusText} ${apiErrorMsg["error-type"]}`;
              throw new Error(errorMessage);
            });
        } else {
          return response.json();
        }
      })
      .catch((error) => {
        return error;
      });
  }
}