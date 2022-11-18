import exchangeUSDto from "../src/js/exchange-USD-to.js";

describe("convert USD to a given currency", () => {

  test("1. It should convert 5 USD to Japanese yen", () => {
    expect(exchangeUSDto(5, "JPY")).toEqual(700.71);
  });
});